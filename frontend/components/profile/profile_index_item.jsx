import React from 'react';
import { withRouter } from 'react-router';

class ProfileIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.showPhoto = this.showPhoto.bind(this);
  }

  showPhoto(e) {
    this.props.openModal(e);
  }

  render() {
    return (
      <img className='profile-index-item' id={this.props.photo.id} onClick={this.showPhoto} src={this.props.photo.img_url} />
    );
  }
}

export default withRouter(ProfileIndexItem);