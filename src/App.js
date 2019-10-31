import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Profile from './Components/Profile/Profile'
import Dialogs from './Components/Dialogs/Dialogs'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <NavBar />
        <div className="App-wrapper-content"  >
          <Route path='/Profile' component={Profile} />
          <Route path='/Dialogs' component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
