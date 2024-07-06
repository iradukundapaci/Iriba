import { FunctionComponent } from "react";
import TopNavbar from "../components/TopNavbar";
import ContactContent from "../components/ContactContent";
import Project from "../components/Project";
import Footer from "../components/Footer";
import styles from "./Portfolio.module.css";

const Portfolio: FunctionComponent = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.topBar}>
        <div className={styles.bar1} />
        <div className={styles.bar2} />
        <div className={styles.bar3} />
      </div>
      <TopNavbar />
      <main className={styles.contactUsSection}>
        <ContactContent />
        <section className={styles.projectShowcase}>
          <Project rectangle205="/rectangle-205@2x.png" />
          <Project rectangle205="/rectangle-2051@2x.png" />
          <Project rectangle205="/rectangle-2052@2x.png" />
          <Project rectangle205="/rectangle-2053@2x.png" />
          <Project rectangle205="/rectangle-2054@2x.png" />
          <Project rectangle205="/rectangle-2055@2x.png" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
