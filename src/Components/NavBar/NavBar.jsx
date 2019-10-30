import React from 'react';
import styles from './NavBar.module.css'

const  NavBar = () => {
    return (
        <nav className={styles.Nave} >
            <div>
                Profile
            </div>
            <div>
                Message
            </div>
            <div>
                News
            </div>
            <div>
                Music
            </div>
            <div>
                Setting
            </div>
        </nav>
    )
}

export default NavBar