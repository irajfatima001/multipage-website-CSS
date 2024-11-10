import React from "react";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.headerContent}>
        <h2 className={styles.headerText}>
          We are always ready to surprise
          <br />
          you with new flavours
        </h2>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>Foodelicious</h2>
        </div>

        <div className={styles.quickLinks}>
          <h2 className={styles.quickLinksTitle}>Quick Links</h2>
          <ul className={styles.linksList}>
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={styles.socialIcons}>
          <FaFacebook className={styles.icon} />
          <BsTwitter className={styles.icon} />
          <BsPinterest className={styles.icon} />
          <FaLinkedinIn className={styles.icon} />
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Foodelicious. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;