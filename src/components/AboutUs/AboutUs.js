import React from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.AboutUs} id="AboutUs">
      <h1 className={styles.Title}>About bedEd</h1>
      <p className={styles.description}>
        At bedEd, the cornerstone of our philosophy is considering sexual well-being from a holistic perspective that includes sexual health as an integral part of mind and body wellness. We believe that in order for you to have the best relationship with your sexuality--and therefore, the best sex possible—we need to make sure your mind, body, and consciousness are in alignment.
        
        We want to live in a culture that is actively removing the shame, fear, trauma, and taboos around sex and normalizing an integrative, expansive approach to human sexuality, because pleasure and good sexual health are essential to not only surviving, but thriving. 

To that end, our goal is to provide you with a safe, fun, inclusive, and welcoming place that offers comprehensive sex education with practical answers, real “sexperts,” and humor.

Come on in!
      </p>
    </div>
  );
}
