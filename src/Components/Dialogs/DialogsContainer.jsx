import React from "react";
import { sendMessage, updateNewMessageText } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const DialogsContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageText
})(Dialogs);

export default DialogsContainer;
