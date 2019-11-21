import React from "react";
import styles from "./NavBar.module.css";
import NavBarItem from "./NavBarItem/NavBarItem";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  // debugger
  let NavBarElements = props.NavBars.map(NavBar => (
    <NavBarItem
      name={NavBar.name}
      id={NavBar.id}
      adres={NavBar.adres}
      key={NavBar.id}
    />
  ));

  return (
    <nav className={styles.Nav}>
      <div className={styles.Item}>{NavBarElements}</div>
    </nav>
  );
};

export default NavBar;
