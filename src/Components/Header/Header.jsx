import React from "react";
import styles from "./Header.module.css";
import logo from "../../image/honeybee-24633_1280.png";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" />
      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <div>
            {" "}
            {props.login} - <button onClick={props.logout}>Log out</button>{" "}
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
