import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

const  NavBar = () => {
    return (
        <nav className={styles.Nav} >
            <div className={styles.Item} >
                <NavLink to='/Profile' activeClassName={styles.active} >Profile</NavLink>
            </div>
            <div className={styles.Item} >
                <NavLink to='/Dialogs' activeClassName={styles.active} >Message</NavLink>
            </div>
            <div className={styles.Item} >
                <NavLink to='/News' activeClassName={styles.active} >News</NavLink>
            </div>
            <div className={styles.Item} >
                <NavLink to='/Music' activeClassName={styles.active} >Music</NavLink>
            </div>
            <div className={styles.Item} >
                <NavLink to='/Setting' activeClassName={styles.active} >Setting</NavLink>
            </div>
        </nav>
    )
}

export default NavBar