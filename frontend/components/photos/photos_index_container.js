import { connect } from 'react-redux';

import { requestPhotos } from '../../actions/photo_actions';
import PhotosIndex from './photos_index';

const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
 
