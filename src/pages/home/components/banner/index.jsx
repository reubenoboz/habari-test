import React from "react";
import Button from "components/button";
import HighlightText from "components/highlight-text";
import styles from "./banner.module.scss"
import Hr from "components/horizontal-line";

const Banner = () => {
  return (
   <>
     <div className={styles.bannerContainer} >
      <div className={styles.headerText}>
        A faster & easier way to receive {" "}
        <HighlightText text="payments" /> online.
      </div>

      <div className={styles.subText}>
        Scuad builds innovative pathways to enable all types of businesses and
        individuals from around the world make and receive payments smarter and
        simpler
      </div>

      <div className={styles.createButton}>
        <Button buttonText="Create an Account" padding="1rem 2rem" />
      </div>
    </div>

    <Hr />
   </>
  );
};

export default Banner;
