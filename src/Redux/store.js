import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import navBarReducer from './navBarReducer'

let store = {
  _state: {
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
  },
  _callSubscriber() {
    console.log('state change')
    },  

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._collSubscriber = observer;
  },


  dispatch(action) { 

    this._state.profilePage = profileReducer (this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action)
    this._state.NavBars = navBarReducer (this._state.NavBars, action)

    this._collSubscriber(this._state);
}
}

// export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

// export const updateMessageTextActionCreator = (text) => ({
//   type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

// export const addPostActionCreator = () => ({type: ADD_POST})

// export const updateNewPostTextActionCreator = (text) => ({
//   type: UPDATE_NEW_POST_TEXT, newText: text})


window.store = store

export default store;