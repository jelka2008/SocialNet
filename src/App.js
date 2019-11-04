import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Profile from './Components/Profile/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import Musik from './Components/Musik/Musik'

import './App.css';

function App(props) {
 
  return (
      
      <div className="App-wrapper">
        <Header />
        <NavBar NavBars={props.state.NavBars} />
        <div className="App-wrapper-content"  >
           <Route path='/Profile' 
              render={ () => <Profile 
                profilePage={props.state.profilePage}
                addPost={props.addPost} 
                updateNewPostText={props.updateNewPostText} /> } />  
           <Route path='/Dialogs' 
              render={ () => <Dialogs 
                dialogsPage={props.state.dialogsPage} 
                sendMessage={props.sendMessage}
                updateMessageText={props.updateMessageText}
              /> } />  
           <Route path='/Musik' render={ () => <Musik /> } />
        </div>
      </div>
  );
}

export default App;
