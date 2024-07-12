import { FunctionComponent } from 'react';
import WhoWeAreSection from '../components/WhoWeAreSection';
import AboutUsContent from '../components/AboutUsContent';
import OurTeamSection from '../components/OurTeamSection';
import Footer from '../components/Footer';
import styles from './AboutUs.module.css';
import Top from '../components/Top';

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <Top />
      <div className={styles.paddingContainer}>
        <WhoWeAreSection
          rectangle206="/rectangle-2061@2x.png"
          whoWeAreSectionBackgroundColor="unset"
          whoWeAreSectionBackground="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #fff"
        />
      </div>
      <AboutUsContent />
      <OurTeamSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
