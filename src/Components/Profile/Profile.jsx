import React from 'react';
import styles from './Profile.module.css'
import MyPosts from './MyPost/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const  Profile = (props) => {
    return (
        <div >
            <ProfileInfo />
            
            <MyPosts posts={props.profilePage.posts} 
                    newPostText ={props.profilePage.newPostText}
                    addPost={props.addPost} 
                    updateNewPostText={props.updateNewPostText} />
        </div>
    )
}

export default Profile