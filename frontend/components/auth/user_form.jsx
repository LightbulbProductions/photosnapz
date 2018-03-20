import React from 'react';
import { withRouter } from 'react-router';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
			username: "",
			password: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser && !this.props.currentUser) {
      this.props.closeSessionModal();
    }
  }

  updateField(field){
		return e => { this.setState({ [field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm('signup', {user});
	}

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.email}
            onChange={this.updateField('email')}
            placeholder='email' />
          <input
            type='text'
            value={this.state.username}
            onChange={this.updateField('username')}
            placeholder='username' />
          <input
            type='password'
            value={this.state.password}
            onChange={this.updateField('password')}
            placeholder='password' />
          <input
            type='submit'
            value='Sign Up' />
        </form>
      </div>
    );
  }
}

export default withRouter(UserForm);