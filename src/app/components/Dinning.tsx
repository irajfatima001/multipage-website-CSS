import React from "react";
import Image from "next/image";
import styles from './Dinning.module.css'; 

const Dining = () => {
  return (
    <div className={styles.diningSection}>
      <div className={styles.diningContainer}>
        <h2 className={styles.diningHeading}>Dining Events</h2>
        <p className={styles.diningDescription}>
          We provide dining events for your special day
          <br />
          with your important people
        </p>
        <div className={styles.buttonContainer}>
          <button className={`${styles.diningButton} ${styles.diningButtonPrivate}`}>
            Private Events
          </button>
          <span className={`${styles.diningButton} ${styles.diningButtonCooperate}`}>
            Corporate Events
          </span>
        </div>
      </div>

      <div className={styles.diningImageContainer}>
        <div className={styles.diningImageWrapper}>
          <Image
            src="/d1.png"
            alt="Decorative Image"
            layout="responsive"
            width={1720}
            height={400}
            className={styles.diningImage}
          />
          <div className={`${styles.diningOverlay} ${styles.diningOverlayLeft}`}>
            <div className={styles.diningInfo}>
              <h2 className={styles.diningInfoHeading}>Fine Dining</h2>
              <p className={styles.diningInfoDescription}>
                Bottle of Champagne
                <br /> Fine Sushi Tower For 2+
                <br /> Dessert
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.diningImageContainer}>
        <div className={styles.diningImageWrapper}>
          <Image
            src="/d2.png"
            alt="Decorative Image"
            layout="responsive"
            width={1720}
            height={400}
            className={styles.diningImage}
          />
          <div className={`${styles.diningOverlay} ${styles.diningOverlayRight}`}>
            <div className={styles.diningInfo}>
              <h2 className={styles.diningInfoHeading}>Gold Dining</h2>
              <p className={styles.diningInfoDescription}>
                Bottle of Champagne
                <br /> Fine Sushi Tower For 2+
                <br /> Dessert
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.diningImageContainer}>
        <div className={styles.diningImageWrapper}>
          <Image
            src="/d3.png"
            alt="Decorative Image"
            layout="responsive"
            width={1720}
            height={400}
            className={styles.diningImage}
          />
          <div className={`${styles.diningOverlay} ${styles.diningOverlayLeft}`}>
            <div className={styles.diningInfo}>
              <h2 className={styles.diningInfoHeading}>Royalty Dining</h2>
              <p className={styles.diningInfoDescription}>
                Bottle of Champagne
                <br /> Fine Sushi Tower For 2+
                <br /> Dessert
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dining