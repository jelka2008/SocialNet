import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPost/MyPostsContainer';

const  Profile = (props) => {
    
    return (
        <div >
            <ProfileInfo />
            
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile