import React from "react";

import Image from "next/image";
import styles from './Menu.module.css'; 

const Menu = () => {
  return (
    <div className={styles.menuSection}>
      <div className={styles.headerContent}>
        <h2 className={styles.heading}>Our Specialities</h2>
        <p className={styles.subheading}>
          Authentic meals from our restaurant served with high <br /> quality ingredients.
        </p>
        <div className={styles.dashContainer}>
          
        </div>
      </div>

      <ul className={styles.menuList}>
        <li className={`${styles.menuItem} ${styles.specialitiesItem}`}>
          Specialities
        </li>
        <li className={styles.menuItem}>Homestyle Sushi</li>
        <li className={styles.menuItem}>Steak</li>
        <li className={styles.menuItem}>With Rice</li>
        <li className={styles.menuItem}>Cocktails</li>
        <li className={styles.menuItem}>Appetizer</li>
      </ul>

      {/* 1st div */}
      <div className={styles.gridContainer}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="/s5.png"
            width={400}
            height={400}
            alt="dish"
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.itemTitle}>Dragon Sushi</h2>
          <p className={styles.itemDescription}>
            Ingredients: Lorem ipsum dolor sit <br />
            amet, consectetur adipiscing elit.
            <br /> Etiam ut imperdiet lectus. Donec <br />
            vitae vulputate nunc, in laoreet <br /> urna.
          </p>
          <p className={styles.price}>$50</p>
        </div>
      </div>

      {/* 2nd div */}
      <div className={styles.gridContainer}>
        <div className={styles.textContent}>
          <h2 className={styles.itemTitle}>Creamy Sushi</h2>
          <p className={styles.itemDescription}>
            Ingredients: Lorem ipsum dolor sit <br />
            amet, consectetur adipiscing elit.
            <br /> Etiam ut imperdiet lectus. Donec <br />
            vitae vulputate nunc, in laoreet <br /> urna.
          </p>
          <p className={styles.price}>$50</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="/s6.png"
            width={400}
            height={400}
            alt="dish"
          />
        </div>
      </div>

      {/* 3rd div */}
      <div className={styles.gridContainer}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="/s7.png"
            width={400}
            height={400}
            alt="dish"
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.itemTitle}>Roll Salmon Sushi</h2>
          <p className={styles.itemDescription}>
            Ingredients: Lorem ipsum dolor sit <br />
            amet, consectetur adipiscing elit.
            <br /> Etiam ut imperdiet lectus. Donec <br />
            vitae vulputate nunc, in laoreet <br /> urna.
          </p>
          <p className={styles.price}>$50</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;