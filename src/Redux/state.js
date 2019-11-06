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
  _collSubscriber() {
    console.log('state change')
    },  

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._collSubscriber = observer;
  },

  dispatch(action) { 
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        post: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = 'пусто';
      this._collSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        this._state.profilePage.newPostText = action.newText;
        this._collSubscriber(this._state);
    } else if (action.type === 'SEND-MESSAGE') {
        let newMessage = {
          id: 6,
          message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = 'пусто';
        this._collSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        this._state.dialogsPage.newMessageText = action.newText;
        this._collSubscriber(this._state);
    }
  }
}

window.store = store

export default store;