import { rerenderEntireTree } from '../render';


let state = {
  profilePage: {
    posts: [
      {id:1, post: 'Hi, How are you?', likesCount: 23},
      {id:2, post: "It's my first post!", likesCount: 3},
      {id:3, post: "It's my second post!", likesCount: 9},
      {id:4, post: "BlaBla", likesCount: 13},
      ],
    newPostText: 'пусто', 
  },
  NavBars: [
    {id:1, name: 'Профиль', adres: 'Profile'},
    {id:2, name: 'Сообщения', adres: 'Dialogs'},
    {id:3, name: 'Новости', adres: 'News'},
    {id:4, name: 'Музыка', adres: 'Musik'},
    {id:5, name: 'Настройки', adres: 'Setting'}
    ],
  dialogsPage: {
    messages: [
      {id:1, message: 'Hi'},
      {id:2, message: 'How is your learning?'},
      {id:3, message: 'Yo'},
      {id:4, message: 'Yo'},
      {id:5, message: 'Yo'}
      ],
    newMessageText: 'пусто',
    dialogs: [
      {id: 1, name: 'Andrey', ava: '../../../image/104356.jpg'},
      {id: 2, name: 'Nastja', ava: './image/95924.gif'},
      {id: 3, name: 'Marina', ava: './image/104201.gif'},
      {id: 4, name: 'Oleg', ava: './image/104105.gif'},
      {id: 5, name: 'Victor', ava: './image/104036.gif'},
      {id: 6, name: 'Anton', ava: './image/78907.gif'}
      ],
  }
}

window.state = state

export let addPost = ( ) => {
  let newPost = {
    id: 5,
    post: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = 'пусто';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let sendMessage = () => {
  let newMessage = {
    id: 6,
    message: state.dialogsPage.newMessageText
  }
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = 'пусто';
  rerenderEntireTree(state);

}

export let updateMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export default state;