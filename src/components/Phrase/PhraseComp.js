import React from "react";

import styles from "./PhraseComp.module.css";

import "animate.css";

const PhraseComp = (props) => {
  return (
    <div className={`${styles.main} animate__animated animate__fadeIn`}>
      <h1 className={styles.phrase}>{props.phrase.phrase}</h1>
      <h4 className={styles.author}>{props.phrase.author}</h4>
    </div>
  );
};

export default PhraseComp;
