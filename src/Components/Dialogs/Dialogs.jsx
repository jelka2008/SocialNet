import React from 'react';
import styles from './Dialogs.module.css'
import Message from './Message/Message'
import DialogsItem from './DialogItem/DialogItem'
import { sendMessageAction, updateNewMessageTextAction } from '../../Redux/dialogsReducer'


const  Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map( dialog => <DialogsItem 
    name={dialog.name} 
    id={dialog.id} 
    ava={dialog.ava}
     /> )

  let messageElements = props.dialogsPage.messages.map( message => <Message message={message.message} key={message.id} /> )

  let newMessageElement = React.createRef();
  
  // let sendMessageAction = () => ({type: 'SEND-MESSAGE'})

  // let updateNewMessageTextAction = (text) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', action: text})

  let sendMessage = () => {
    props.dispatch(sendMessageAction())
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextAction(text))
  }

    return (
      <div className={styles.dialogs} >
        <div className={styles.dialogsItem} >
          
          { dialogsElements }

        </div>    
        <div className={styles.messages}>

          { messageElements}
        </div>
        <div>
          <div>
            <textarea 
              onChange={onMessageChange}
              ref={newMessageElement} 
              value={props.dialogsPage.newMessageText} />
          </div>
        
          <div>
            <button onClick={sendMessage} >Send</button>
          </div>        
        </div>
      </div>
    )
}

export default Dialogs