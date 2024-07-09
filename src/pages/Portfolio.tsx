import { FunctionComponent } from 'react';
import TopNavbar from '../components/TopNavbar';
import ContactContent from '../components/ContactContent';
import Project from '../components/Project';
import Footer from '../components/Footer';
import styles from './Portfolio.module.css';
import TopBar from '../components/TopBar';

const Portfolio: FunctionComponent = () => {
  return (
    <div className={styles.portfolio}>
      <TopBar />
      <TopNavbar />
      <main className={styles.contactUsSection}>
        <ContactContent />
        <section className={styles.projectShowcase}>
          <Project
            rectangle205="/rectangle-205@2x.png"
            title="NU-VISION HIGH SCHOOL"
            link="NVHS"
            task="We created a colourful and engaging school magazine
using our publishing and layout design skills that
brilliantly represented their academic experience
while representing the essence of their Cambridge
International School distinction."
          />
          <Project
            rectangle205="/rectangle-2051@2x.png"
            title="THE LUX STORE"
            link="LUX"
            task="We photographed their products in a unique style, giving
the best views to potential customers."
          />
          <Project
            rectangle205="/rectangle-2052@2x.png"
            title="KHWEZI ALLIANCE"
            link="KHA"
            task="We collaborated with @khwezialliance through branding to
create a marvelous experience for the New Brunswick youth
at the Khwezi Experience event, an amazing opportunity for
young people to network, debate and connect with people
from different backgrounds."
          />
          <Project
            rectangle205="/rectangle-2053@2x.png"
            title="HARAMBEE"
            link="HARAMBEE"
            task="We helped them curate impactful visuals that reflected
their excellence, transforming their narratives into
captivating stories. We ensured that every pixel
reflected their commitment to quality."
          />
          <Project
            rectangle205="/rectangle-2054@2x.png"
            title="KENABU HOLDINGS"
            link="KENABU"
            task="We carefully created user-friendly interfaces, ensured flexible
layouts, managed logo redesign, and refined messaging to improve
the user experience and renewed the brand with credibility."
          />
          <Project
            rectangle205="/rectangle-2055@2x.png"
            title="GLOBE EDUCATION CONSULT"
            link="GEC"
            task="We transformed Globe Education Consult into a light of opportunities by distinguishing their offices. Our creative abilities helped
them broaden their global reach by creating appealing social media
posts that echoed their vision."
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
