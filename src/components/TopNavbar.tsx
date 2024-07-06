import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./TopNavbar.module.css";

export type TopNavbarType = {
  className?: string;
  aboutUsHref: string;
  portfolioHref: string;
  contactUsHref: string;
};

const TopNavbar: FunctionComponent<TopNavbarType> = ({
  className = "",
  aboutUsHref,
  portfolioHref,
  contactUsHref,
}) => {
  return (
    <div className={[styles.topNavbar, className].join(" ")}>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.navBar}>
        <a className={styles.home}>Home</a>
        <Link className={styles.aboutUs} to={aboutUsHref}>
          About us
        </Link>
        <Link className={styles.portfolio} to={portfolioHref}>
          Portfolio
        </Link>
        <a className={styles.blog}>Blog</a>
        <Link className={styles.contactUs} to={contactUsHref}>
          Contact us
        </Link>
        <button className={styles.blackMenu1} />
      </div>
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
