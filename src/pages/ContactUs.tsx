import { FunctionComponent } from 'react';
import TeamContent from '../components/TeamContent';
import Footer from '../components/Footer';
import styles from './ContactUs.module.css';
import Top from '../components/Top';

const ContactUs: FunctionComponent = () => {
  return (
    <div className={styles.contactUs}>
      <Top />
      <section className={styles.mapWrapper}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.2178120626989!2d30.105388787850167!3d-1.9596119205802498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca65642b44a7f%3A0xcc3efed14920f720!2s48%20KG%20599%20Street%2C%20Kigali!5e0!3m2!1sen!2srw!4v1719851195227!5m2!1sen!2srw"
          style={{ border: '0' }}
          loading="lazy"
        ></iframe>{' '}
      </section>
      <section className={styles.teamContentWrapper}>
        <TeamContent />
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
