import React from "react";
import Header from "./Header";
import {
<<<<<<< HEAD
=======
  setAuthUserData,
>>>>>>> a0728c37aff8d50e790bae9c2d1d1f2a51b7f285
  // setAuthUsersProfile
  authMe
} from "../../Redux/authReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

<<<<<<< HEAD
export default connect(mapStateToProps, { authMe })(HeaderContainer);
=======
export default connect(mapStateToProps, { setAuthUserData, authMe })(
  HeaderContainer
);
>>>>>>> a0728c37aff8d50e790bae9c2d1d1f2a51b7f285
