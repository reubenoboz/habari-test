import React from "react";
import styles from "./nav.module.scss";
import Nigeria from "assets/images/nigeria-flag-circle.png";
import { ReactComponent as CareDown } from "assets/images/caret-down.svg";

const Navigation = () => {
  return (
    <>
      <div className={styles.navContainer}>
      <div className={styles.linksWrapper}>
        {navLinks.map((link, index) => (
          <span className={styles.navLink} key={index}>
            {link}
          </span>
        ))}
      </div>

      <div className={styles.internationalization}>
        <img className={styles.languageImage} src={Nigeria} alt="Language" />
        <CareDown className={styles.caretDown} />
      </div>
    </div>

   
    </>
  );
};

export default Navigation;

const navLinks = [
  "Products",
  "Pricing",
  "Support",
  "Documenntation",
  "Login",
  "Create Account",
];
