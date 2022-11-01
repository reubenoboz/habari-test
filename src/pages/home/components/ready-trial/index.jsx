import Button from "components/button";
import HighlightText from "components/highlight-text";
import React from "react";
import styles from "./ready.module.scss";

const ReadyTrial = () => {
  return (
    <div>
      <div>
        <HighlightText text="Ready for a trial ?" color="#10b26b" />
      </div>

      <div className={styles.createAccount}>
        <div className={styles.headerText}>
          Start accepting <HighlightText text="payments" /> in minutes
        </div>
        <div className={styles.createBtn}>
          <Button buttonText="Create a free Account" padding="1rem 2rem" />
        </div>
      </div>
    </div>
  );
};

export default ReadyTrial;
