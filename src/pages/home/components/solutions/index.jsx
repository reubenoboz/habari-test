import React from "react";
import styles from "./solutions.module.scss";
import Image from "assets/images/male-chef.png";
import HighlightText from "components/highlight-text";
import { ReactComponent as TickSquare } from "assets/images/tick-square.svg";
import { ReactComponent as ArrowRight } from "assets/images/arrow-right.svg";

const Check = () => {
  return (
    <TickSquare
      style={{ marginRight: "0.8rem" }}
      strokeWidth="2px"
      fill="#FFFFFF"
      stroke="#10b26b"
      height={20}
    />
  );
};

const Solutions = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={Image} alt="chef" />
      </div>
      <div className={styles.betterPayment}>
        <div>
          <HighlightText text="Solutions " color="#ed803f" />
        </div>

        <h1 className={styles.heading}>
          Better payments, <br /> unlimited opportunities
        </h1>

        <p>
          Get faster, more reliable transactions. Higher conversions. Unbeatable
          insight and flexibility. So you can delight your customers and unlock
          new revenue streams.
        </p>

        <div className={styles.listWrapper}>
          <div className={styles.leftList}>
            <div className={styles.listItem}>
              <Check /> <span>Debit and Credit Cards.</span>
            </div>
            <div className={styles.listItem}>
              <Check /> <span>Bank Account</span>
            </div>
            <div className={styles.listItem}>
              <Check /> <span>Bank Transfer</span>
            </div>
          </div>

          <div className={styles.rightList}>
            <div className={styles.listItem}>
              <Check /> <span>USSD</span>
            </div>
            <div className={styles.listItem}>
              <Check /> <span>Soft POS</span>
            </div>
            <div className={styles.listItem}>
              <Check /> <span>Mobile Money</span>
            </div>
          </div>
        </div>
        <div className={styles.createAccount}>
          <span className={styles.text}>Create a free account</span>{" "}
            <ArrowRight fill="white" stroke="#0177ff" height={15} />
        </div>
      </div>

      
    </div>
  );
};

export default Solutions;
