import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Dialogs.module.css'
import Message from './Message/Message'
import DialogsItem from './DialogItem/DialogItem'


const  Dialogs = (props) => {

  let dialogsElements = props.dialogs.map( dialog => <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} /> )

  let messageElements = props.messages.map( message => <Message message={message.message} key={message.id} /> )

    return (
      <div className={styles.dialogs} >
        <div className={styles.dialogsItem} >
          
          { dialogsElements }

        </div>    
        <div className={styles.messages}>

          { messageElements}
          
        </div>
      </div>
    )
}

export default Dialogs