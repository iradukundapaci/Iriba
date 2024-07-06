import { FunctionComponent } from "react";
import TopNavbar from "../components/TopNavbar";
import TeamContent from "../components/TeamContent";
import Footer from "../components/Footer";
import styles from "./ContactUs.module.css";

const ContactUs: FunctionComponent = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.topBar}>
        <div className={styles.bar1} />
        <div className={styles.barRight}>
          <div className={styles.bar2} />
          <div className={styles.bar3} />
        </div>
      </div>
      <TopNavbar />
      <section className={styles.mapWrapper}>
        <div className={styles.map}>
          <img className={styles.map1Icon} alt="" src="/map-1@2x.png" />
        </div>
      </section>
      <section className={styles.teamContentWrapper}>
        <TeamContent />
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
