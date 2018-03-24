import { connect } from 'react-redux';

import { requestProfile, requestPhoto, clearPhoto, createLike,
  deleteLike, createComment, deleteComment, createFollow, deleteFollow } from '../../actions/photo_actions';
import Profile from './profile';

const mapStateToProps = state => ({
  profile: state.profile,
  photo: state.photo,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestProfile: username => dispatch(requestProfile(username)),
  requestPhoto: photoId => dispatch(requestPhoto(photoId)),
  clearPhoto: () => dispatch(clearPhoto()),
  createLike: photoId => dispatch(createLike(photoId, 'profile')),
  deleteLike: photoId => dispatch(deleteLike(photoId, 'profile')),
  createComment: comment => dispatch(createComment(comment, 'profile')),
  deleteComment: commentId => dispatch(deleteComment(commentId, 'profile')),
  createFollow: comment => dispatch(createFollow(comment, 'profile')),
  deleteFollow: commentId => dispatch(deleteFollow(commentId, 'profile'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);