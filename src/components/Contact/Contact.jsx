import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <a href={getImageUrl("pdf/resume_samia_nasreen.pdf")} download className={styles.resumeLink}>
          View my resume in pdf format.
        </a>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:samianasreen@iut-dhaka.edu">samianasreen@iut-dhaka.edu</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/samia-nasreen-65496b302/">linkedin.com/in/samia-nasreen</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/deadPanda11">github.com/deadPanda11</a>
        </li>
      </ul>
    </footer>
  );
};
