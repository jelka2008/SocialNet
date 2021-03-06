import React from "react";
import styles from "./ProfileInfo.module.css";
import Content from "../../../image/Cont.jpg";
import Preloader from "../../Common/Preloader/Preloader";
import fb from "../../../image/ListSoc/facebook.png";
import ws from "../../../image/ListSoc/znachok-jelektronnoj-pochty.png";
import vk from "../../../image/ListSoc/vk.png";
import tw from "../../../image/ListSoc/twitter.png";
import inst from "../../../image/ListSoc/instagram.png";
import youtub from "../../../image/ListSoc/youtube.png";
import gh from "../../../image/ListSoc/github.png";
import mL from "../../../image/ListSoc/linkedin.png";
import { NavLink } from "react-router-dom";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src={Content} alt="Main content" />
      </div>
      <div className={styles.description}>
        <div className={styles.photo}>
          <img src={props.profile.photos.large} alt="avatar" />
        </div>
        <div className={styles.aboutMe}>
          <div className={styles.fullName}>{props.profile.fullName}</div>
          <div>
            <span>Обо мне:</span> {props.profile.aboutMe}
          </div>
          <div>
            <div>Меня также можно нати так:</div>
            <div>
              <a
                href={props.profile.contacts.facebook}
                title={props.profile.contacts.facebook}
              >
                <img
                  className={styles.email}
                  src={fb}
                  alt="facbooke"
                  width="30"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
