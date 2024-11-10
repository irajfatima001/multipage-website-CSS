import React from "react";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import styles from './Feature.module.css'; 

const speciality = [
  {
    img: "/s1.png",
    title: "Spinach & Mushroom ",
    rating: 4.7,
  },
  {
    img: "/s2.png",
    title: "Sweet Potato",
    rating: 4.7,
  },
  {
    img: "/s3.png",
    title: "Spaghetti",
    rating: 4.7,
  },
  {
    img: "/s4.png",
    title: "Chickpea Curry",
    rating: 4.7,
  },
];

const Feature = () => {
  return (
    <div className={styles.featureSection}>
      <div className={styles.headerContent}>
        <h2 className={styles.heading}>{"Today's"} Special</h2>
        <p className={styles.subheading}>
          Special menu often comes different every day, this is our special food for today
        </p>
        <div className={styles.dashContainer}>
          
        </div>
      </div>

      <div className={styles.specialityContainer}>
        {speciality.map((item) => (
          <div key={item.title} className={styles.itemWrapper}>
            <Image
              src={item.img}
              alt={item.title}
              width={180}
              height={180}
              className={styles.itemImage}
            />
            <div className={styles.itemContent}>
              <h1 className={styles.itemTitle}>{item.title}</h1>
              <div className={styles.starRating}>
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`${styles.starIcon} ${index < item.rating ? styles.starFilled : styles.starEmpty}`}
                  />
                ))}
              </div>
              <p className={styles.itemDescription}>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit. Etiam <br />
                ut imperdiet lectus.
              </p>
              <button className={styles.orderButton}>
                Order now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.backgroundImageContainer}>
        <Image
          src="/bg2.png"
          alt="Decorative Image"
          layout="responsive"
          width={1920}
          height={600}
          className={styles.backgroundImage}
        />
      </div>
    </div>
  );
};

export default Feature;