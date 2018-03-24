import React from 'react';
import { withRouter } from 'react-router';
//this version has demo in so can switch out
class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin() {
    const guestUser = { username: 'guest', password: 'guestguest'};
    this.props.processForm('login', {user: guestUser});
  }

  render () {
    return (
      <div className='auth-form'>
        {this.props.errors[0] && <div className='errors-container'>
          <div className='errors-header'>Whoops! Let's fix these real quick.</div>
          <ul className='errors'>
          {this.props.errors.map(e => (
            <li className='error' key={e}>{e}</li>
          ))}
          </ul>
        </div>
        }
        <form onSubmit={this.handleSubmit}>
          <input
            className='auth-form-input'
            type='text'
            value={this.state.email}
            onChange={this.updateField('email')}
            placeholder='email'
            autoFocus />
          <input
            className='auth-form-input'
            type='text'
            value={this.state.username}
            onChange={this.updateField('username')}
            placeholder='username' />
          <input
            className='auth-form-input'
            type='password'
            value={this.state.password}
            onChange={this.updateField('password')}
            placeholder='password' />
          <input
            className='auth-form-submit'
            type='submit'
            value={'Sign me up!'} />
          <input className='auth-form-submit' value='Demo user' readOnly onClick={this.demoLogin} />
        </form>
      </div>
    );
  }
}

export default withRouter(UserForm);