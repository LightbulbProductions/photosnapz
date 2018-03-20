import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;