

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <Image
        src="/bg1.png"
        alt="Background Image"
        layout="fill"
        className={styles.heroImage}
      />

      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          Taste the rich flavour of high quality meals
        </h1>
        <p className={styles.heroDescription}>
          We only use the five star quality for our
          <br />
          menu, come and get the richness in<br />
          every meal we serve.
        </p>
        <Link href="/menu">
          <button className={styles.heroButton}>
            Go to menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;