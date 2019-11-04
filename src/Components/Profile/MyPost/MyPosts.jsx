import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const  MyPosts = (props) => {

  let postElements = props.posts.map(post => <Post message={post.post} like={post.likesCount} />)

  let newPostElement = React.createRef();
                                                   
  let addPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text) 
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