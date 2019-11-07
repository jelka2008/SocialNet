import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import { addPostAction, updateNewPostTextAction } from '../../../Redux/profileReducer'

const  MyPosts = (props) => {

  let postElements = props.posts.map(post => <Post message={post.post} like={post.likesCount} />)

  let newPostElement = React.createRef();
                                              
  let addPost = () => {
    props.dispatch(addPostAction())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextAction(text)) 
  }

    return (
      <div className={styles.postsBlock} >
        <h3>My posts</h3>
        <div>
          <div>
            <textarea 
              onChange={onPostChange} 
              ref={newPostElement} 
              value={props.newPostText} />
          </div>
          <div>
            <button onClick={ addPost } >Add post</button>
          </div>
        </div>
        <div className={styles.posts} >
          
          { postElements }

        </div>
      </div>
    )
}

export default MyPosts