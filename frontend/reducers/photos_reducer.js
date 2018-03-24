import { RECEIVE_PHOTOS, RECEIVE_FEED_LIKE, REMOVE_FEED_LIKE, RECEIVE_FEED_COMMENT, REMOVE_FEED_COMMENT, CLEAR_PHOTOS } from '../actions/photo_actions';
import merge from 'lodash/merge';

const PhotosReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    case CLEAR_PHOTOS:
      return {};
    case RECEIVE_FEED_LIKE:
      const likedState = merge({}, state);
      likedState[action.like.photo_id].liked_by_current_user = true;
      return likedState;
    case REMOVE_FEED_LIKE:
      const unlikedState = merge({}, state);
      unlikedState[action.like.photo_id].liked_by_current_user = false;
      return unlikedState;
    case RECEIVE_FEED_COMMENT:
      const commentedState = merge({}, state);
      commentedState[action.comment.photo_id].comments[action.comment.id] = action.comment;
      return commentedState;
    case REMOVE_FEED_COMMENT:
      const uncommentedState = merge({}, state);
      delete uncommentedState[action.comment.photo_id].comments[action.comment.id];
      return uncommentedState;
    default:
      return state;
  }
};

export default PhotosReducer;