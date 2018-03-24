import React from 'react';
import { withRouter } from 'react-router';

import ProfileIndexItem from '../profile/profile_index_item';

class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='profile-index'>
        {this.props.photos.map(photo => (
          <ProfileIndexItem photo={photo} key={photo.id} openModal={this.props.openModal} />
        ))}
      </div>
    );
  }
}

export default withRouter(ProfileIndex);