import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogItem";

const Dialogs = props => {
  // debugger
  let dialogsElements = props.dialogsPage.dialogs.map(dialog => (
    <DialogsItem name={dialog.name} id={dialog.id} ava={dialog.ava} />
  ));

  let messageElements = props.dialogsPage.messages.map(message => (
    <Message message={message.message} key={message.id} />
  ));

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = event => {
    let text = event.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>{dialogsElements}</div>
      <div className={styles.messages}>{messageElements}</div>
      <div>
        <div>
          <textarea
            onChange={onMessageChange}
            value={props.dialogsPage.newMessageText}
            placeholder="Enter your message"
          />
        </div>

        <div>
          <button onClick={onSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
