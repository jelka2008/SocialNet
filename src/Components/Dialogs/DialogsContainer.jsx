import React from 'react';
import { sendMessageAction, updateNewMessageTextAction } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'
import StoreContext from '../../storeContex';

const  DialogsContainer = (props) => {
// debugger

    return (
      <StoreContext.Consumer> 
      { 
          (store) => {
          let state = store.getState().dialogsPage

          let onSendMessage = () => {
            let action = sendMessageAction()
            store.dispatch(action)
          }

          let onMessageChange = (text) => {
            let action = updateNewMessageTextAction(text)
            store.dispatch(action)
          }

          return (
             <Dialogs sendMessage={onSendMessage} 
                    updateNewMessageText={onMessageChange}
                    state={state} />
          )
        }   
        }
    </StoreContext.Consumer>
     
    )
     
}

export default DialogsContainer