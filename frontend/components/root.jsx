import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash';
import PhotosFeedContainer from './photos/photos_feed_container';
import PhotoUploadContainer from './photos/photo_upload_container';
import ProfileContainer from './profile/profile_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/feed');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Splash} onEnter={_redirectIfLoggedIn}/>
          <Route path="discover" component={PhotosFeedContainer} onEnter={_ensureLoggedIn} />
          <Route path="feed" component={PhotosFeedContainer} onEnter={_ensureLoggedIn} />
          <Route path="upload" component={PhotoUploadContainer} onEnter={_ensureLoggedIn} />
          <Route path=":username" component={ProfileContainer} onEnter={_ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
