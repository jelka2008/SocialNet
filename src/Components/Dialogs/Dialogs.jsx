import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


const  Dialogs = () => {
    return (
      <div className={styles.dialogs} >
        <div className={styles.dialogsItem} >
          <div className={`${styles.dialog} ${styles.active}`} >
            <NavLink to='/dialogs/1' >Dimych</NavLink>
          </div>
          <div className={`${styles.dialog} ${styles.active}`} >
            <NavLink to='/dialogs/2' >Anton</NavLink> 
          </div>
          <div className={`${styles.dialog} ${styles.active}`} >
            <NavLink to='/dialogs/3' >Nastja</NavLink>
          </div>
        </div>
        <div className={styles.messages}>
          <div className={styles.message}>Hi</div>
          <div className={styles.message}>How is your learning?</div>
          <div className={styles.message}>Yo</div>
        </div>

      </div>
    )
}

export default Dialogs