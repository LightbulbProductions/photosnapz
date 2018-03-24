import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import PhotosReducer from './photos_reducer';
import PhotoReducer from './photo_reducer';
import ProfileReducer from './profile_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  photos: PhotosReducer,
  photo: PhotoReducer,
  profile: ProfileReducer
});

export default RootReducer;