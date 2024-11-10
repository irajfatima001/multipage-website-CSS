import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './Survey.module.css'; 

const Survey = () => {
  return (
    <div className={styles.surveySection}>
      <div className={styles.headerContent}>
        <h2 className={styles.heading}>Our Story</h2>
        <p className={styles.subheading}>
          A journey for making successful luxury restaurant<br />
          with the best services
        </p>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="/o1.png"
            width={600}
            height={600}
            alt="story image"
          />
        </div>
        <div className={styles.textContent}>
          <p className={styles.textDescription}>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit. <br />
            Integer feugiat urna id leo euismod <br />
            rhoncus. Aliquam erat volutpat. <br />
            Nulla id aliquam neque, at dignissim<br />
            quam. Praesent et lacus accumsan,<br />
            consequat nisl a, mattis sapien.
          </p>
          <p className={styles.textDescription}>
            Nam sodales ullamcorper aliquet.<br />
            Phasellus ut pretium libero,<br />
            vitae imperdiet purus. Sed sed <br />
            tincidunt velit. Aliquam vitae <br />
            ipsum molestie, vehicula nisi <br />
            quis, finibus leo.
          </p>

          <Link href="/about">
            <button className={styles.moreButton}>More..</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Survey;