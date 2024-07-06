import { FunctionComponent } from "react";
import TopNavbar from "../components/TopNavbar";
import WhoWeAreSection from "../components/WhoWeAreSection";
import AboutUsContent from "../components/AboutUsContent";
import OurTeamSection from "../components/OurTeamSection";
import Footer from "../components/Footer";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.topBar}>
        <div className={styles.bar1} />
        <div className={styles.bar2} />
        <div className={styles.bar3} />
      </div>
      <TopNavbar
        aboutUsHref="/about-us"
        portfolioHref="/portfolio"
        contactUsHref="/"
      />
      <WhoWeAreSection
        rectangle206="/rectangle-2061@2x.png"
        whoWeAreSectionBackgroundColor="unset"
        whoWeAreSectionBackground="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #fff"
      />
      <AboutUsContent />
      <OurTeamSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
