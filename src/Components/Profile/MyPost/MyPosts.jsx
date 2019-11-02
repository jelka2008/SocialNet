import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const  MyPosts = (props) => {



  let postElements = props.posts.map( post => <Post message={post.post} like={post.likesCount} />
)
    return (
      <div className={styles.postsBlock} >
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={styles.posts} >
          
          { postElements }

        </div>
      </div>
    )
}

export default MyPosts