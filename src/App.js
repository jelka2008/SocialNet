import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import NavBarContainer from './Components/NavBar/NavBarContainer'
import Profile from './Components/Profile/Profile'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import Musik from './Components/Musik/Musik'

import './App.css';

function App(props) {
//  debugger
  return (
      
      <div className="App-wrapper">
        <Header />
        <NavBarContainer />
        <div className="App-wrapper-content"  >
           <Route path='/Profile' 
              render={ () => <Profile /> } />  
           <Route path='/Dialogs' 
              render={ () => <DialogsContainer />  } />  
           <Route path='/Musik' render={ () => <Musik /> } />
        </div>
      </div>
  );
}

export default App;
