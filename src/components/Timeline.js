import React, { useEffect, useState } from 'react';
import styles from '../styles/Timeline.module.css';
import timelineData from '../data/timelineData';

const TimelineEntry = ({ year, month, title, description, imageUrl, isLeft, isVisible }) => (
  <div className={`${styles.timelineEntry} ${isLeft ? styles.left : styles.right} ${isVisible ? styles.visible : ''}`}>
    <div className={styles.content}>
      <div className={styles.date}>
        <span className={styles.year}>{year}</span>
        <span className={styles.month}>{month}</span>
      </div>
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{description}</p>
        {imageUrl && <img src={imageUrl} alt={title} className={styles.image} />}
      </div>
    </div>
  </div>
);

const Timeline = () => {
  const [visibleEntries, setVisibleEntries] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const entries = document.querySelectorAll(`.${styles.timelineEntry}`);
      entries.forEach((entry, index) => {
        const rect = entry.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          setVisibleEntries(prev => [...new Set([...prev, index])]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelineLine}></div>
      {timelineData.map((entry, index) => (
        <TimelineEntry
          key={index}
          {...entry}
          isLeft={index % 2 === 0}
          isVisible={visibleEntries.includes(index)}
        />
      ))}
    </div>
  );
};

export default Timeline; 