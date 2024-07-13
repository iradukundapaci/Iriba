import { FunctionComponent } from 'react';
import WhoWeAreTitle from './WhoWeAreTitle';
import styles from './OurClients.module.css';
import ClientCoursel from './ClientCoursel';

export type OurClientsType = {
  className?: string;
};

const OurClients: FunctionComponent<OurClientsType> = ({ className = '' }) => {
  return (
    <div className={[styles.ourClients, className].join(' ')}>
      <WhoWeAreTitle wHOWEARE="OUR CLIENTS" propGap="5px" />
      <div className={styles.harambeParent}>
        <ClientCoursel />
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
