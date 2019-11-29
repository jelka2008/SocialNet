import React from "react";
import { sendMessage, updateNewMessageText } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

export default compose(
  connect(mapStateToProps, {
    sendMessage,
    updateNewMessageText
  }),
  withAuthRedirect
)(Dialogs);
