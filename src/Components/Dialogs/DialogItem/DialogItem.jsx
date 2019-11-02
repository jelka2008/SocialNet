import React from 'react';
import styles from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom';


const DialogsItem = (props) => {
  return (
    <div className={`${styles.dialog} ${styles.active}`} >
      <NavLink to={'/dialogs/' + props.id} >
      {props.name}
      </NavLink>
    </div>
  )
}

export default DialogsItem