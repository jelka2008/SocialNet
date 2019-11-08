import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Profile from './Components/Profile/Profile'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import Musik from './Components/Musik/Musik'

import './App.css';

function App(props) {
//  debugger
  return (
      
      <div className="App-wrapper">
        <Header />
        <NavBar NavBars={props.state.NavBars} />
        <div className="App-wrapper-content"  >
           <Route path='/Profile' 
              render={ () => <Profile 
                store={props.store} /> } />  
           <Route path='/Dialogs' 
              render={ () => <DialogsContainer 
                store={props.store} /> } />  
           <Route path='/Musik' render={ () => <Musik /> } />
        </div>
      </div>
  );
}

export default App;
