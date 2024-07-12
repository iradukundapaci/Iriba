import { FunctionComponent } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import PercptionSection from '../components/PercptionSection';
import OurClients from '../components/OurClients';
import Posts from '../components/Posts';
import Subscription from '../components/Subscription';
import Footer from '../components/Footer';
import styles from './IribaHome.module.css';
import Top from '../components/Top';

const IribaHome: FunctionComponent = () => {
  return (
    <div className={styles.iribaHome}>
      <Top />
      <HeroSection />
      <ServicesSection />
      <WhoWeAreSection rectangle206="/rectangle-206@2x.png" />
      <PercptionSection />
      <OurClients />
      <Posts />
      <Subscription />
      <Footer />
    </div>
  );
};

export default IribaHome;
