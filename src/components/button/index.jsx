import React from "react";
import styles from "./button.module.scss";

const Button = ({ buttonText, padding = "0" }) => {
  return (
    <button className={styles.btn } style={{ padding }} >
      {buttonText}
    </button>
  );
};

export default Button;
