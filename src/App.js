import React from "react";
import { Route } from "react-router-dom";
import NavBarContainer from "./Components/NavBar/NavBarContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Musik from "./Components/Musik/Musik";
import "./App.css";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HederContainer";

function App(props) {
  //  debugger
  return (
    <div className="App-wrapper">
      <HeaderContainer />
      <NavBarContainer />
      <div className="App-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/musik" render={() => <Musik />} />
        <Route path="/users" render={() => <UsersContainer />} />
        {/* <Route path="/login" render={() => <UsersContainer />} /> */}
      </div>
    </div>
  );
}

export default App;
