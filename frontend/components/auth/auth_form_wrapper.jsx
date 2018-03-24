import React from 'react';
import { withRouter } from 'react-router';

import SessionForm from './session_form';
import UserForm from './user_form';

class AuthFormWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: this.props.initialFormType
    };

    this.toggleFormType = this.toggleFormType.bind(this);
  }

  toggleFormType(formType) {
    return () => {
      this.setState({ formType: formType });
    };
  }

  render() {
    return (
      <div className='auth-form-wrapper'>
        <div className='auth-form-links'>
          <div className={`auth-form-link ${this.state.formType === 'login' ? 'active-form' : 'inactive-form'}`} onClick={this.toggleFormType('login')} >Log In</div>
          <div className={`auth-form-link ${this.state.formType === 'signup' ? 'active-form' : 'inactive-form'}`} onClick={this.toggleFormType('signup')} >Sign Up</div>
        </div>
        {this.state.formType === 'signup' ?
          <UserForm
            processForm={this.props.processForm}
            closeSessionModal={this.props.closeSessionModal}
            currentUser={this.props.currentUser}
            errors={this.props.errors} /> :
          <SessionForm
            processForm={this.props.processForm}
            closeSessionModal={this.props.closeSessionModal}
            currentUser={this.props.currentUser}
            errors={this.props.errors} />}
      </div>
    );
  }
}

export default withRouter(AuthFormWrapper);