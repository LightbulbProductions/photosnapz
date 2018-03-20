import { RECEIVE_PHOTO, CLEAR_PHOTO, RECEIVE_PROFILE_LIKE, REMOVE_PROFILE_LIKE,
  RECEIVE_PROFILE_COMMENT, REMOVE_PROFILE_COMMENT } from '../actions/photo_actions';
import merge from 'lodash/merge';

const PhotoReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_PHOTO:
      return merge({}, action.photo);
    case CLEAR_PHOTO:
      return {};
    case RECEIVE_PROFILE_LIKE:
      const likedState = merge({}, state);
      likedState.liked_by_current_user = true;
      return likedState;
    case REMOVE_PROFILE_LIKE:
      const unlikedState = merge({}, state);
      unlikedState.liked_by_current_user = false;
      return unlikedState;
    case RECEIVE_PROFILE_COMMENT:
      const commentedState = merge({}, state);
      commentedState.comments[action.comment.id] = action.comment;
      return commentedState;
    case REMOVE_PROFILE_COMMENT:
      const uncommentedState = merge({}, state);
      delete uncommentedState.comments[action.comment.id];
      return uncommentedState;
    default:
      return state;
  }
};

export default PhotoReducer;