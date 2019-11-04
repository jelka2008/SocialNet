import React from 'react';
import styles from '../NavBar.module.css';
import {NavLink} from 'react-router-dom';

const  NavBarItem = (props) => {
    return (
        <nav className={styles.Nav} >
            <div className={styles.Item} >
                <NavLink to={props.adres} activeClassName={styles.active} >{props.name}</NavLink>
            </div>
        </nav>
    )
}

export default NavBarItem