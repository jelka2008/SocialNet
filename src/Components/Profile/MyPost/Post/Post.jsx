import React from 'react';
import styles from './Post.module.css'
import Ava from '../../../../image/ava3.jpeg'

const  MyPosts = () => {
    return (
      <div className={styles.item} >
        <div>
          <img src={Ava} alt="ava" />
          post 1
          <div>
            <span>like</span>
          </div>
        </div>
      </div>
    )
}

export default MyPosts