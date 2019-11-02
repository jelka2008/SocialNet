import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Profile from './Components/Profile/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import Musik from './Components/Musik/Musik'

import './App.css';

function App(props) {
 
  return (
      <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <NavBar NavBars={props.NavBars} />
        <div className="App-wrapper-content"  >
           <Route path='/Profile' render={ () => <Profile posts={props.posts} /> } />  
           <Route path='/Dialogs' render={ () => <Dialogs messages={props.messages} dialogs={props.dialogs} /> } />  
           <Route path='/Musik' render={ () => <Musik /> } />
        </div>
      </div>
     </BrowserRouter>
  );
}

export default App;
