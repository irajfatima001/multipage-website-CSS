"use client"
import React from 'react';
import styles from '../components/About.module.css'; 

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        
        <h1 className={styles.title}>Our Story</h1>
        <p className={`${styles.paragraph} ${styles.highlight}`}>
          Welcome to <span className={styles.highlight}>Foodelicious</span>, where every dish tells a story and every meal is a celebration of flavor. Located in the vibrant heart of <span className={styles.highlight}>Downtown New York</span>, we’ve been delighting locals and visitors alike since 2022.
        </p>
        <p className={styles.paragraph}>
          At Foodelicious, we believe in the power of food to bring people together. Our mission is to craft unforgettable dining experiences using the freshest, locally sourced ingredients. From our kitchen to your table, every bite is a testament to our passion for <span className={styles.highlight}>modern fusion cuisine</span>.
        </p>
        
        <h2 className={styles.subtitle}>The Heart of Our Kitchen</h2>
        <p className={styles.paragraph}>
          Our culinary journey began with a simple dream: to share the rich flavors and traditions of <span className={styles.highlight}>Mediterranean and Asian cuisine</span>. Our restaurant is a labor of love. Each dish is a blend of time-honored recipes and modern twists, created with care by our talented chefs who pour their hearts into every plate.
        </p>
        
        <h2 className={styles.subtitle}>Our Community</h2>
        <p className={styles.paragraph}>
          We are more than just a restaurant; we are a gathering place for the community. Our doors are open to everyone from families celebrating milestones to friends catching up over a shared meal. We take pride in supporting local farmers and artisans, ensuring that our menu reflects the bounty of our region.
        </p>
        
        <h2 className={styles.subtitle}>Join Us at the Table</h2>
        <p className={styles.paragraph}>
          We invite you to experience the warmth of our hospitality and the richness of our cuisine. Visit us at <span className={styles.highlight}>123 Flavor Street, Downtown New York</span>, where every meal is an opportunity to create memories. Follow us on social media to stay updated on special events, seasonal menus, and exclusive offers. We can’t wait to welcome you into our family!
        </p>
        
      </div>
    </div>
  );
};

export default About;