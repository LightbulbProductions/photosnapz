import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';

import AuthFormWrapper from '../auth/auth_form_wrapper';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modelOpen: false, initialFormType: 'login' };
    Modal.setAppElement(document.body);

    this.closeSessionModal = this.closeSessionModal.bind(this);
    this.navToHome = this.navToHome.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.currentUser && !this.props.currentUser) {
      this.props.router.replace('/home');
    } else if (!newProps.currentUser && this.props.currentUser) {
      this.props.router.replace('/');
    }
  }

  sessionLinks() {
    return (
      <nav className='nav-links'>
        <div onClick={this.openSessionModal('login')}>Log In</div>
        <div onClick={this.openSessionModal('signup')}>Sign Up</div>
      </nav>
    );
  }

  openSessionModal(formType) {
    return (e) => {
      this.setState({ modalOpen: true, initialFormType: formType });
    };
  }

  closeSessionModal() {
    this.setState({ modalOpen: false });
  }

  navToHome() {
    this.props.router.replace('/');
  }

  loggedInNav() {
    return (
      <div className='nav-links'>
        <Link to='/stories'>Stories</Link>
        <Link to='/new-story'>Create a Story</Link>
        <Link to='/explore'>Explore Data</Link>
        <Link to='' onClick={this.props.logout}>{this.props.currentUser.username}</Link>
      </div>
    );
  }

  render() {
    return (
      <div className='navbar'>
        <h1 className='navbar-title' onClick={this.navToHome}>narrative</h1>
        {this.props.currentUser ? this.loggedInNav() : this.sessionLinks()}
        {
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeSessionModal}
            closeTimeoutMS={100}
            contentLabel='Modal'>
              <AuthFormWrapper
                initialFormType={this.state.initialFormType}
                processForm={this.props.processForm}
                closeSessionModal={this.closeSessionModal}
                currentUser={this.props.currentUser} />
          </Modal>
        }
      </div>
    );
  }
}

export default withRouter(Navbar);