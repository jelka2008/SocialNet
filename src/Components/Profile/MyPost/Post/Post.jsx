import React from 'react';
import styles from './Post.module.css'
import Ava from '../../../../image/ava3.jpeg'

const  MyPosts = (props) => {
    return (
      <div className={styles.item} >
        <div>
          <img src={Ava} alt="ava" />
          { props.message }
          <div>
            <span>like</span>
            &nbsp;
            { props.like }
          </div>
        </div>
      </div>
    )
}

export default MyPosts