import React from "react";
import styles from "./Header.module.css";
import logo from "../../image/honeybee-24633_1280.png";

const Header = () => {
  return (
    <header className={styles.Header}>
      <img src={logo} alt="Logo" />
    </header>
  );
};

export default Header;
