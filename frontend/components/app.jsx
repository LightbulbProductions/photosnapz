import React from 'react';
import { Link, withRouter } from 'react-router';

import NavbarContainer from './navbar/navbar_container';


const App = ({ children }) => (
  <div>
    <NavbarContainer />
    <div className='main-page'>
      {children}
    </div>
  </div>
);

export default withRouter(App);