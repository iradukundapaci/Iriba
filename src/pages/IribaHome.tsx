import { FunctionComponent } from 'react';
import TopBar from '../components/TopBar';
import TopNavbar from '../components/TopNavbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import PercptionSection from '../components/PercptionSection';
import OurClients from '../components/OurClients';
import Posts from '../components/Posts';
import Subscription from '../components/Subscription';
import Footer from '../components/Footer';
import styles from './IribaHome.module.css';

const IribaHome: FunctionComponent = () => {
  return (
    <div className={styles.iribaHome}>
      <TopBar />
      <TopNavbar />
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
