"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import styles from './Navbar.module.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <h2 className={styles.logo}>Foodelicious</h2>
        <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
          <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link href="/about" onClick={handleLinkClick}>About</Link></li>
          <li><Link href="/menu" onClick={handleLinkClick}>Menu</Link></li>
          <li><Link href="/reservation" onClick={handleLinkClick}>Reservation</Link></li>
          <li><Link href="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
        <button className={styles.signupBtn}>Signup</button>
        <button onClick={toggleMenu} className={styles.menuBtn}>
          <AiOutlineMenu className={styles.menuIcon} size={30} />
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileLink} onClick={handleLinkClick}>Home</Link>
          <Link href="/about" className={styles.mobileLink} onClick={handleLinkClick}>About</Link>
          <Link href="/menu" className={styles.mobileLink} onClick={handleLinkClick}>Menu</Link>
          <Link href="/reservation" className={styles.mobileLink} onClick={handleLinkClick}>Reservation</Link>
          <Link href="/contact" className={styles.mobileLink} onClick={handleLinkClick}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;