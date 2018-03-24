import React from 'react';
import { withRouter } from 'react-router';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.like = this.like.bind(this);
    this.unlike = this.unlike.bind(this);
    this.updateCommentText = this.updateCommentText.bind(this);
    this.submitComment = this.submitComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
    this.state = { text: "" };
  }

  like(e) {
    e.preventDefault();
    this.props.createLike(this.props.photo.id);
  }

  unlike(e) {
    e.preventDefault();
    this.props.deleteLike(this.props.photo.id);
  }

  updateCommentText(e) {
    this.setState({ text: e.target.value });
  }

  submitComment(e) {
    e.preventDefault();
    this.props.createComment({
      text: this.state.text,
      photo_id: this.props.photo.id
    });
    this.setState({ text: "" });
  }

  removeComment(e) {
    this.props.deleteComment(e.target.id)
  }

  render() {
    if (!this.props.photo.img_url) {
      return (
        <div>Loading...</div>
      );
    }
    const photo = this.props.photo;
    const photoTime = new Date(photo.created_at);
    const currentTime = new Date();
    const timeDifferentialInMinutes = (currentTime - photoTime) / 60000;
    let time;
    if (timeDifferentialInMinutes < 1) {
      time = "seconds ago";
    } else if (timeDifferentialInMinutes < 60) {
      time = parseInt(timeDifferentialInMinutes)
      time += time === 1 ? " minute ago" : " minutes ago";
    } else if (timeDifferentialInMinutes < 1440 ) {
      time = parseInt(timeDifferentialInMinutes / 60);
      time += time === 1 ? " hour ago" : " hours ago";
    } else {
      time = parseInt(timeDifferentialInMinutes / 1440);
      time += time === 1 ? " day ago" : " days ago";
    }

    const likeButton = photo.liked_by_current_user ?
      <button className='photo-show-like-button' onClick={this.unlike}>♥</button> :
      <button className='photo-show-like-button unliked-color' onClick={this.like}>♥</button>;

    const comments = photo.comments && Object.values(photo.comments).map(comment => (
      <li className='photo-show-comment' key={comment.id}>
        <span className='comment-author-username'>{comment.author.username}</span>
        <span className='comment-text'>{comment.text}</span>
        {comment.author.id === this.props.currentUser.id &&
          <span className='comment-delete-button' id={comment.id} onClick={this.removeComment}>x</span>}
      </li>
    ));

    return (
      <div className='photo-show-container'>
        {this.props.photo &&
          <div className='photo-show'>
            <img className='show-photo' src={photo.img_url} onClick={this.pushToPhoto}/>
            <div className='show-photo-info'>
              <div className='photo-show-label-head'>
                <div className='author-photo-mask'>
                  <img className='author-photo' src={photo.author.img_url} onClick={this.pushToAuthor}/>
                </div>
                <div className='author-time-labels'>
                  <span className='author-label' onClick={this.pushToAuthor}>{photo.author.username}</span>
                  <div className='time-label'>{time}</div>
                </div>
              </div>
              <div className='show-interaction-label'>
                <div className='comments-container'>
                  <ul className='comments-index'>
                    {comments}
                  </ul>
                  <form className='photo-show-comments-form' onSubmit={this.submitComment}>
                    <input type='text' onChange={this.updateCommentText} value={this.state.text} placeholder='Write a comment...'/>
                  </form>
                </div>
                {likeButton}
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default withRouter(PhotoShow);
