import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const [displayedMenu, setDisplayedMenu] = useState(window.innerWidth >= 375);

  useEffect(() => {
    const handleResize = () => {
      setDisplayedMenu(window.innerWidth >= 375);
    };

    window.addEventListener("resize", handleResize);

    // Limpia el listener del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setDisplayedMenu(!displayedMenu);

    !displayedMenu
      ? (document.body.style.backgroundColor = "#cecece")
      : (document.body.style.backgroundColor = "white");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <img src="../../public/images/logo.svg" />

        {displayedMenu && (
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
        )}

        <div className={styles.hamburguerMenu}>
          <input
            type="checkbox"
            id="buttonMenu"
            className={styles.buttonMenu}
            onClick={handleClick}
          />
          <label className={styles.lblMenu} htmlFor="buttonMenu">
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
