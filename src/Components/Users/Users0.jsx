import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios';
import userPhotos from '../../image/ava0.png'

const  Users = (props) => {
// debugger
   if ( props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
       
        props.setUsers(response.data.items)
    } )
   }
    return (
        <div >
            {props.users.map( u => 
                <div key={u.id}> 
                    <span className={styles.left} >
                        <div>
                            <img src={ u.photos.small != null ? u.photos.small : userPhotos } alt="peaplsPhoto" className={styles.userPhoto} />
                        </div>
                        <div>
                               { u.followed 
                                ? <button onClick={() => { 
                                    props.unfollow(u.id) 
                                }}>Unfollow</button>
                                : <button onClick={() => { 
                                    props.follow(u.id) 
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span className={styles.right} >
                        <span>
                            <div>{u.name}</div>
                            <div>u.status</div>
                        </span>
                        <span>
                            <div>u.location.country</div>
                            <div></div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users