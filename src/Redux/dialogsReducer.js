const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) =>{

  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText
      }
      state.messages.push(newMessage);
      state.newMessageText = 'пусто';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
        return state;
  }
}

export const sendMessageAction = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextAction = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer