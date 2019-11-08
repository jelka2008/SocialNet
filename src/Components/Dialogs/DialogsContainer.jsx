import React from 'react';
import { sendMessageAction, updateNewMessageTextAction } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'

const  DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage

  let onSendMessage = () => {
    let action = sendMessageAction()
    props.store.dispatch(action)
  }

  let onMessageChange = (text) => {
    let action = updateNewMessageTextAction(text)
    props.store.dispatch(action)
  }

    return <Dialogs sendMessage={onSendMessage} 
                    updateNewMessageText={onMessageChange}
                    state={state} />
}

export default DialogsContainer