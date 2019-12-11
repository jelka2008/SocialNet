const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your learning?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" }
  ],
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
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: action.newMessageBody
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };
    default:
      return state;
  }
};

export const sendMessage = newMessageBody => ({
  type: SEND_MESSAGE,
  newMessageBody
});

export default dialogsReducer;
