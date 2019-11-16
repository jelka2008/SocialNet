import React from "react";
import {
  sendMessageAction,
  updateNewMessageTextAction
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

let mapDispatchToProps = dispatch => {
  return {
    sendMessage: () => {
      dispatch(sendMessageAction());
    },
    updateNewMessageText: text => {
      dispatch(updateNewMessageTextAction(text));
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
