import React from 'react';
import { addPostAction, updateNewPostTextAction } from '../../../Redux/profileReducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../storeContex';

const  MyPostsContainer = () => {

  return (
    <StoreContext.Consumer> 
      {
        (store) => {
        let state = store.getState();

        let onAddPost = () => {
          let action = addPostAction()
          store.dispatch(action)
        }

        let onPostChange = (text) => {
          let action = updateNewPostTextAction(text)
          store.dispatch(action) 
        }
      return (
        <MyPosts addPost={onAddPost} 
              updateNewPostText={onPostChange} 
              state={state.profilePage} />
        )
      }
    }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer