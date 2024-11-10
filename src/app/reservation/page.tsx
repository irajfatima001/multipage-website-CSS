"use client";
import React, { useState } from 'react';
import styles from '../components/Reservation.module.css'; // Import the custom CSS module

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    specialRequests: '',
  });

  

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Make a Reservation</h1>
        
        
          <div className="mb-6">
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className={styles.input}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className={styles.input}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="date" className={styles.label}>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
              className={styles.input}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="time" className={styles.label}>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              required
              className={styles.input}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="guests" className={styles.label}>Number of Guests</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
              required
              className={styles.select}
            >
              
              
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="specialRequests" className={styles.label}>Special Requests</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              rows={4}
              className={styles.textarea}
            />
          </div>

          <button type="submit" className={styles.button}>
            Reserve Now
          </button>
        
      </div>
    </div>
  );
};

export default Reservation;