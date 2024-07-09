import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './TopNavbar.module.css';

export type TopNavbarType = {
  className?: string;
};

const TopNavbar: FunctionComponent<TopNavbarType> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.topNavbar} ${className}`}>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.navBarBig}>
        <Link className={styles.aboutUs} to="/">
          Home
        </Link>
        <Link className={styles.aboutUs} to="/about-us">
          About us
        </Link>
        <Link className={styles.portfolio} to="/portfolio">
          Portfolio
        </Link>
        <a className={styles.blog} href="https://iribacreatives.blogspot.com/">
          Blog
        </a>
        <Link className={styles.contactUs} to="/contact-us">
          Contact us
        </Link>
      </div>
      <div className={`${styles.navBar} ${isMenuOpen ? styles.open : ''}`}>
        <Link className={styles.navLink} to="/">
          Home
        </Link>
        <Link className={styles.navLink} to="/about-us">
          About us
        </Link>
        <Link className={styles.navLink} to="/portfolio">
          Portfolio
        </Link>
        <a
          className={styles.navLink}
          href="https://iribacreatives.blogspot.com/"
        >
          Blog
        </a>
        <Link className={styles.navLink} to="/contact-us">
          Contact us
        </Link>
      </div>
      <button className={styles.blackMenu1} onClick={toggleMenu} />
      {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu} />}
      <div className={styles.socialHeader}>
        <div className={styles.stayConnected}>Stay Connected</div>
        <div className={styles.socialMediaIconsHeader}>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
          <img
            className={styles.youtubeIcon1}
            alt=""
            src="/youtube-icon-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;