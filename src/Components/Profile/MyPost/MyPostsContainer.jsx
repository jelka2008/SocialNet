import React from 'react';
import { addPostAction, updateNewPostTextAction } from '../../../Redux/profileReducer'
import MyPosts from './MyPosts';

const  MyPostsContainer = (props) => {
                                         
  let state = props.store.getState();

  let onAddPost = () => {
    let action = addPostAction()
    props.store.dispatch(action)
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextAction(text)
    props.store.dispatch(action) 
  }

  return <MyPosts addPost={onAddPost} 
                  updateNewPostText={onPostChange} 
                  state={state.profilePage} />
}

export default MyPostsContainer