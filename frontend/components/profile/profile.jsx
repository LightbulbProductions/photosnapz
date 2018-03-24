import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';

import ProfileIndex from '../profile/profile_index';
import PhotoShow from '../profile/photo_show';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
    this.state = { modelOpen: false };
    Modal.setAppElement(document.body);

    this.modalStyle = {
      content: {
        backgroundColor: '#8590b5',
        width: '80vw',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
        padding: '0'
      }
    };
  }

  componentDidMount() {
    this.props.requestProfile(this.props.params.username);
  }

  openModal(e) {
    this.props.requestPhoto(e.target.id);
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.props.clearPhoto();
    this.setState({ modalOpen: false });
  }

  toggleFollow() {
    this.props.profile.following ?
      this.props.deleteFollow(this.props.profile.id) :
      this.props.createFollow(this.props.profile.id);
  }

  render() {
    if (!this.props.profile.username) {
      return (<div>Loading...</div>);
    }
    const profile = this.props.profile;

    return (
      <div className='profile-container'>
        <div className='profile-header'>
          <div className='profile-image-container'>
            <img className='profile-image' src={profile.img_url} />
          </div>
          <div className='profile-info'>
            <div className='profile-info-sub profile-username'>{profile.username}</div>
            <button onClick={this.toggleFollow} className='profile-follow-button'>
              {profile.following ? "unfollow" : "follow"}
            </button>
            {profile.hometown && <div className='profile-info-sub profile-hometown'>{profile.hometown}</div>}
            <div className='profile-info-sub profile-bio'>{profile.bio}</div>
          </div>
        </div>

        <ProfileIndex photos={profile.photos} openModal={this.openModal}/>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          closeTimeoutMS={100}
          contentLabel='Modal'
          style={this.modalStyle}>
            <PhotoShow
              photo={this.props.photo}
              currentUser={this.props.currentUser}
              createLike={this.props.createLike}
              deleteLike={this.props.deleteLike}
              createComment={this.props.createComment}
              deleteComment={this.props.deleteComment} />
        </Modal>
      </div>
    );
  }
}

export default withRouter(Profile);