import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const  MyPosts = () => {
    return (
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
          <button>Remove</button>
        </div>
        <Post message="Hi, How are you?" like='5' />
        <Post message="It's my first post!" like='8' />
      </div>
    )
}

export default MyPosts