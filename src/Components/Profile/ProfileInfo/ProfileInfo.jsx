import React from "react";
import styles from "./ProfileInfo.module.css";
import Cont from "../../../image/Cont.jpg";
import Avatar from "../../../image/avatar.jpeg";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src={Cont} alt="Main content" />
      </div>
      <div className={styles.description}>
        <img src={Avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default ProfileInfo;
