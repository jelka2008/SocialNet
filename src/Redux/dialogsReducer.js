const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your learning?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" }
  ],
  newMessageText: "",
  dialogs: [
    { id: 1, name: "Andrey", ava: "../../../image/104356.jpg" },
    { id: 2, name: "Nastja", ava: "./image/95924.gif" },
    { id: 3, name: "Marina", ava: "./image/104201.gif" },
    { id: 4, name: "Oleg", ava: "./image/104105.gif" },
    { id: 5, name: "Victor", ava: "./image/104036.gif" },
    { id: 6, name: "Anton", ava: "./image/78907.gif" }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ""
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      };
    default:
      return state;
  }
};

export const sendMessageAction = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextAction = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});

export default dialogsReducer;
