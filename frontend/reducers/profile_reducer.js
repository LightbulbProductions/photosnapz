import { RECEIVE_PROFILE, RECEIVE_FOLLOW, REMOVE_FOLLOW, CLEAR_PROFILE } from '../actions/photo_actions';
import merge from 'lodash/merge';

const ProfileReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_PROFILE:
      return merge({}, action.profile);
    case CLEAR_PROFILE:
      return merge({}, {});
    case RECEIVE_FOLLOW:
      const followedState = merge({}, state);
      followedState.following = true;
      return followedState;
    case REMOVE_FOLLOW:
      const unfollowedState = merge({}, state);
      unfollowedState.following = false;
      return unfollowedState;
    default:
      return state;
  }
};

export default ProfileReducer;