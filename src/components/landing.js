import React from "react";
import styles from "./landing.module.css";

import { Link }  from "react-router-dom";
import logo from "../logo/dpr.png";


function landing() {
  return (
    <div className={styles.main}>
      <div className={styles.overlay}></div>
      <video src="/video/knowledgee.mp4" autoPlay loop muted />

      <div className={styles.content}>
      <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/selector">
            <button className={styles.btn}>Let's Dive in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default landing;
