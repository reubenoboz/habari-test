import React from "react";
import styles from "./featureList.module.scss";
import { ReactComponent as TickCircle } from "assets/images/tick-circle.svg";

const Check = () => {
  return <TickCircle strokeWidth="2px" fill="#FFFFFF" stroke="#0066FF" height={30} />;
};

const FeatureList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.listContainer}>
        <div className={styles.listItem}>
          <div className={styles.itemIcon}>
            <Check />
          </div>
          <div>
            <span className={styles.itemheading}>Quick setup.</span> Begin
            accepting payments in 15 minutes.
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.itemIcon}>
            {" "}
            <Check />
          </div>
          <div>
            <span className={styles.itemheading}>Honest pricing.</span> Only pay
            for successful transactions.
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.itemIcon}>
            <Check />
          </div>
          <div>
            {" "}
            <span className={styles.itemheading}>
              All leading payment methods.
            </span>{" "}
            The best localised experience.
          </div>
        </div>
      </div>

      <div className={styles.feesRange}>
        Fees range between 0.10-2.4NGN (+ additional fees based on % of
        transaction value). More pricing details per payment method here.
      </div>
    </div>
  );
};

export default FeatureList;
