import Card from "components/card";
import HighlightText from "components/highlight-text";
import React from "react";
import styles from "./support.module.scss";
import Earth from "assets/images/earth.png"
import Enterpreneur from "assets/images/enterpreneur.jpeg"
import Money from "assets/images/money.png"
import { ReactComponent as ArrowRight } from "assets/images/arrow-right.svg";

const Support = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <HighlightText text="Support" />
      </div>
      <div className={styles.trusted}>
        <h1>Trusted by businesses all over Africa</h1>
        <div>
          Our platform provides a resource of scalable and reliable technology
          optimized to drive growth in new markets and dominate in older ones.
        </div>
      </div>

      <div className={styles.supportList}>
        <Card>
        <img src={Earth} alt="" height={30} />
          <h3 className={styles.listHeading}>Scuad for Global Brands</h3>
          <div>We help global brands accept payments from across Africa.</div>
          <div className={styles.learnMore}>
          <span className={styles.text}>Learn More</span>{" "}
            <ArrowRight fill="white" stroke="#0177ff" height={15} />
        </div>
        </Card>
        <Card>
        <img src={Enterpreneur} alt="" height={30} />
          <h3>Scuad for Entrepreneurs</h3>
          <div>
            From startup to scale up, we can support you at every stage of your
            businesses growth.
          </div>
          <div className={styles.learnMore}>
          <span className={styles.text}>Learn More</span>{" "}
            <ArrowRight fill="white" stroke="#0177ff" height={15} />
        </div>
        </Card>
        <Card>
        <img src={Money} alt="" height={30}  />
          <h3>Scuad for Large Organizations</h3>
          <div>
            Paystack helps many of the largest corporate and government
            organizations in Nigeria get paid quickly and securely.
          </div>
          <div className={styles.learnMore}>
          <span className={styles.text}>Learn More</span>{" "}
            <ArrowRight fill="white" stroke="#0177ff" height={15} />
        </div>
        </Card>
      </div>
    </div>
  );
};

export default Support;
