import React from 'react';
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Profile from './Components/Profile/Profile'

import './App.css';

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
