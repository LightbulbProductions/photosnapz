import { connect } from 'react-redux';
import { logout, login, signup } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.session,
  ownProps
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  processForm: (formType, user) => {
    formType === 'signup' ? dispatch(signup(user)) : dispatch(login(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);