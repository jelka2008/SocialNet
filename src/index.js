import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  {id: 1, name: 'Andrey'},
  {id: 2, name: 'Nastja'},
  {id: 3, name: 'Marina'},
  {id: 4, name: 'Oleg'},
  {id: 5, name: 'Victor'},
  {id: 6, name: 'Anton'}
]

let messages = [
  {id:1, message: 'Hi'},
  {id:2, message: 'How is your learning?'},
  {id:3, message: 'Yo'},
  {id:4, message: 'Yo'},
  {id:5, message: 'Yo'}
]

let NavBars = [
  {id:1, name: 'Профиль', adres: 'Profile'},
  {id:2, name: 'Сообщения', adres: 'Dialogs'},
  {id:3, name: 'Новости', adres: 'News'},
  {id:4, name: 'Музыка', adres: 'Musik'},
  {id:5, name: 'Настройки', adres: 'Setting'}
]

let posts = [
  {id:1, post: 'Hi, How are you?', likesCount: 23},
  {id:2, post: "It's my first post!", likesCount: 3},
  {id:3, post: "It's my second post!", likesCount: 9},
  {id:4, post: "BlaBla", likesCount: 13},
]

ReactDOM.render(<App posts={posts} NavBars={NavBars} messages={messages} dialogs={dialogs} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
