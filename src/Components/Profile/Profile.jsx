import React from 'react';
import styles from './Profile.module.css'
import MyPosts from './MyPost/MyPosts'
import Cont from '../../image/Cont.jpg';
import Avatar from '../../image/avatar.jpeg';

const  Profile = () => {
    return (
        <div className={styles.Profile} >
            <div>
                <img src={Cont} alt="Main content" />
            </div>
            <div>
                <img src={Avatar} alt="avatar" />
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile