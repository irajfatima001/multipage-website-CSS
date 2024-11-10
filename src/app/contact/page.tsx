"use client";
import React, { useState } from "react";
import styles from '../components/Contact.module.css'; 

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Us</h1>
        <form className={styles.formContainer}>
          <div className="mb-4">
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className={styles.input}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className={styles.input}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              required
              className={`${styles.input} ${styles.textarea}`}
            />
          </div>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;