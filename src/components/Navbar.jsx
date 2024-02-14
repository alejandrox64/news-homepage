import React from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <img src="../../public/images/logo.svg" />

        <div className={styles.hamburguerMenu}>
          <input
            type="checkbox"
            id="buttonMenu"
            className={styles.buttonMenu}
          />
          <label className={styles.lblMenu} htmlFor="buttonMenu">
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </label>
        </div>

        <ul className={styles.navList}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
