import React, { FunctionComponent, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ''}`
          }
          to="/about-us"
        >
          About us
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ''}`
          }
          to="/portfolio"
        >
          Portfolio
        </NavLink>
        <a
          className={styles.navLink}
          href="https://iribacreatives.blogspot.com/"
        >
          Blog
        </a>
        <NavLink
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ''}`
          }
          to="/contact-us"
        >
          Contact us
        </NavLink>
      </div>
      <div className={`${styles.navBar} ${isMenuOpen ? styles.open : ''}`}>
        <NavLink
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ''}`
          }
          to="/about-us"
        >
          About us
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ''}`
          }
          to="/portfolio"
        >
          Portfolio
        </NavLink>
        <a
          className={styles.navLink}
          href="https://iribacreatives.blogspot.com/"
        >
          Blog
        </a>
        <NavLink
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ''}`
          }
          to="/contact-us"
        >
          Contact us
        </NavLink>
      </div>
      <button className={styles.blackMenu1} onClick={toggleMenu} />
      {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu} />}
      <div className={styles.socialHeader}>
        <div className={styles.stayConnected}>Stay Connected</div>
        <div className={styles.socialMediaIconsHeader}>
          <a href="https://www.instagram.com/iribacreatives/">
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          </a>
          <a href="https://www.facebook.com/iribacreatives">
            <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
          </a>
          <a href="https://x.com/iribacreatives">
            <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
          </a>
          <a href="https://www.linkedin.com/company/86700196/admin/dashboard/">
            <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
          </a>
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
