import { connect } from 'react-redux';

import { requestPhotos, createLike, deleteLike, createComment, deleteComment } from '../../actions/photo_actions';
import PhotosFeed from './photos_feed';

const mapStateToProps = state => ({
  photos: state.photos,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos()),
  createLike: photoId => dispatch(createLike(photoId, 'feed')),
  deleteLike: photoId => dispatch(deleteLike(photoId, 'feed')),
  createComment: comment => dispatch(createComment(comment, 'feed')),
  deleteComment: commentId => dispatch(deleteComment(commentId, 'feed'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosFeed);