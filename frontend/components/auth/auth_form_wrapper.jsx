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
      <div>
        <div onClick={this.toggleFormType('login')} >LOG IN</div>
        <div onClick={this.toggleFormType('signup')} >SIGN UP</div>
        {this.state.formType === 'signup' ?
          <UserForm
            processForm={this.props.processForm}
            closeSessionModal={this.props.closeSessionModal}
            currentUser={this.props.currentUser} /> :
          <SessionForm
            processForm={this.props.processForm}
            closeSessionModal={this.props.closeSessionModal}
            currentUser={this.props.currentUser} />}
      </div>
    );
  }
}

export default withRouter(AuthFormWrapper);