import { FunctionComponent } from "react";
import WhoWeAreTitle from "./WhoWeAreTitle";
import styles from "./OurClients.module.css";

export type OurClientsType = {
  className?: string;
};

const OurClients: FunctionComponent<OurClientsType> = ({ className = "" }) => {
  return (
    <div className={[styles.ourClients, className].join(" ")}>
      <WhoWeAreTitle wHOWEARE="OUR CLIENTS" propGap="5px" />
      <div className={styles.harambeParent}>
        <img className={styles.harambeIcon} alt="" src="/harambe.svg" />
        <img className={styles.khweziIcon} alt="" src="/khwezi.svg" />
        <img className={styles.cascadeIcon} alt="" src="/cascade.svg" />
        <img className={styles.quickHomesIcon} alt="" src="/quick-homes.svg" />
        <div className={styles.nara}>
          <img className={styles.groupIcon} alt="" src="/group8.svg" />
          <img className={styles.groupIcon1} alt="" src="/group9.svg" />
        </div>
      </div>
      <div className={styles.atIribaCreatives}>
        At Iriba Creatives, we help budding brands harness the digital
        landscape. Our services include SEO, social media management,
        pay-per-click advertising, and content creation.
      </div>
    </div>
  );
};

export default OurClients;
