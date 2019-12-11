import React from "react";
import { Route, withRouter } from "react-router-dom";
import NavBarContainer from "./Components/NavBar/NavBarContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Musik from "./Components/Musik/Musik";
import "./App.css";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HederContainer";
import LoginPage from "./Components/Login/LoginPage";
import { initializeApp } from "./Redux/appReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./Components/Common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="App-wrapper">
        <HeaderContainer />
        <NavBarContainer />
        <div className="App-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/musik" render={() => <Musik />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
});
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
