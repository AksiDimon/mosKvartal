'use client';

import { useEffect, useState, type KeyboardEventHandler } from 'react';

import styles from './scrollTopButton.module.css';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleScrollToTop();
    }
  };

  return (
    <div
      className={`scroll-top-button ${styles.scrollTopButton} ${
        isVisible ? styles.visible : ''
      }`}
      id="js-scroll-top"
      onClick={handleScrollToTop}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label="Scroll to top"
      tabIndex={0}
    >
      <div className={styles.iconWrapper}>
        <img src="/assets/icon-scroll.svg" alt="icon-wrapper" />
      </div>
    </div>
  );
};

export default ScrollTopButton;
