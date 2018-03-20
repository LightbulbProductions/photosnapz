import { RECEIVE_ERRORS, CLEAR_ERRORS, signup, logout } from '../actions/session_actions';
import configureStore from '../store/store';

const ErrorsReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;