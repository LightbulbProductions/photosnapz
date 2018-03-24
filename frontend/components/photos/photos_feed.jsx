import React from 'react';
import { withRouter } from 'react-router';

import PhotosFeedItem from './photos_feed_item';

class PhotosFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPhotos();
  }

  render() {
    return (
      <div className='photos-feed-container'>
        {this.props.photos && Object.values(this.props.photos).reverse().map(photo => (
          <PhotosFeedItem photo={photo} key={photo.id} currentUser={this.props.currentUser}
            createLike={this.props.createLike} deleteLike={this.props.deleteLike}
            createComment={this.props.createComment} deleteComment={this.props.deleteComment}/>
        ))}
      </div>
    );
  }
}

export default withRouter(PhotosFeed);