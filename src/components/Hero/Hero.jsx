import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm <br></br> Samia Nasreen</h1>
        <p className={styles.description}>
          I am a fourth-year Software Engineering student at the
          Islamic University of Technology, driven by a passion
          for front-end development and creative problem-solving.
        </p>
        <a href="mailto:samianasreen@iut-dhaka.edu" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.avif")}
        alt="Hero image of me"
        className={`${styles.heroImg} ${styles['circular-image']}`}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
