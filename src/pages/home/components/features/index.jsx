import HighlightText from "components/highlight-text";
import React from "react";
import SkeletonLoader from "assets/images/skeleton-loader.png";
import styles from "./features.module.scss";
import Button from "components/button";
import { ReactComponent as ArrowRight } from "assets/images/arrow-right.svg";

const Features = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.featureText}>
        <h5>
          <HighlightText text="Features" color="#4d2de6" />
        </h5>
        <h1 className={styles.heading}>Create Payment Requests</h1>

        <p className={styles.subText}>
          Make a simple payment link in 5 seconds. Use our powerful features to
          customize your request
        </p>

        <div className={styles.learnMore}>
          <span className={styles.text}>Learn More</span>{" "}
            <ArrowRight fill="white" stroke="#0177ff" height={15} />
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img className={styles.image} src={SkeletonLoader} alt="screen" />
        <div className={styles.copyLink}>
          <span className={styles.linkText}>
            https://www.habarpay.com/940jej...
          </span>
          <Button buttonText="Copy Link" padding="0.3rem 0.6rem" />
        </div>
      </div>
    </div>
  );
};

export default Features;
