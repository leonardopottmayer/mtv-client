import React from "react";

import styles from "./Credits.module.css";

import "animate.css";

const Credits = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.text}>
        Made by{" "}
        <a
          className={styles.gradient}
          target="_blank"
          href="https://pottmayer.dev"
        >
          Leonardo Pottmayer
        </a>
      </h1>
    </div>
  );
};

export default Credits;
