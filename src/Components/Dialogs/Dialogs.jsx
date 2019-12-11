import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogItem";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../Common/FormControls/FormControls";
import { required, maxLengthCreator } from "../../Utils/Validators/validator";

const Dialogs = props => {
  // debugger
  let dialogsElements = props.dialogsPage.dialogs.map(dialog => (
    <DialogsItem name={dialog.name} id={dialog.id} ava={dialog.ava} />
  ));

  let messageElements = props.dialogsPage.messages.map(message => (
    <Message message={message.message} key={message.id} />
  ));

  let addNewMessage = values => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>{dialogsElements}</div>
      <div className={styles.messages}>{messageElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"newMessageBody"}
          component={Textarea}
          placeholder={"Enter your message"}
          validate={[required, maxLength100]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
