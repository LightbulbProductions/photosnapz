import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';

import AuthFormWrapper from '../auth/auth_form_wrapper';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modelOpen: false, initialFormType: 'login' };
    Modal.setAppElement(document.body);

    this.modalStyle = {
      content: {
        backgroundColor: '#F2F5FF',
        width: '300px',
        height: '300px',
        display: 'block',
        margin: '20vh auto 0 auto',
        overflow: 'visible'
      }
    }

    this.closeSessionModal = this.closeSessionModal.bind(this);
    this.navToHome = this.navToHome.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.currentUser && !this.props.currentUser) {
      this.props.router.replace('/feed');
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
    this.props.clearErrors();
    this.setState({ modalOpen: false });
  }

  navToHome() {
    this.props.router.replace('/');
  }

  loggedInNav() {
    return (
      <div className='nav-links'>
        <Link to='/discover'>Discover</Link>
        <Link to='/upload'>Upload</Link>
        <Link to='/feed'>Feed</Link>
        <Link to={`/${this.props.currentUser.username}`}>Profile</Link>
        <Link to='' onClick={this.props.logout}>Logout</Link>
      </div>
    );
  }


  render() {
    return (
      <div className='navbar'>
        <h1 className='navbar-title' onClick={this.navToHome}>PhotoSnapz!</h1>
        {this.props.currentUser ? this.loggedInNav() : this.sessionLinks()}
        {
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeSessionModal}
            closeTimeoutMS={100}
            contentLabel='Modal'
            style={this.modalStyle}>
              <AuthFormWrapper
                initialFormType={this.state.initialFormType}
                processForm={this.props.processForm}
                closeSessionModal={this.closeSessionModal}
                currentUser={this.props.currentUser}
                errors={this.props.errors} />
          </Modal>
        }
      </div>
    );
  }
}

export default withRouter(Navbar);