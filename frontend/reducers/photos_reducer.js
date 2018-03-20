import { RECEIVE_PHOTOS, LOGOUT } from '../actions/photo_actions';
import merge from 'lodash/merge';

const PhotosReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_PHOTOS:
      return merge({}, photos);
    default:
      return state;
  }
};

export default PhotosReducer;