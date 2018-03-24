import { connect } from 'react-redux';

import { postPhoto } from '../../actions/photo_actions';
import PhotoUpload from './photo_upload';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  postPhoto: photo => dispatch(postPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUpload);