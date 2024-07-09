import React from 'react';
import { useParams } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar';
import Project1 from '../components/Project1';
import Footer from '../components/Footer';
import styles from './ViewProject.module.css';
import TopBar from '../components/TopBar';

const ViewProject: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  // Dynamically create image paths based on the project title
  const images = [
    `/${title}/image1.jpg`,
    `/${title}/image2.jpg`,
    `/${title}/image3.jpg`,
  ];

  return (
    <div className={styles.viewProject}>
      <TopBar />
      <main className={styles.mainContent}>
        <TopNavbar />
        <section className={styles.body}>
          <div className={styles.contentWrapper}>
            <div className={styles.innerContent}>
              <div className={styles.frameParent}>
                <div className={styles.nvhsWrapper}>
                  <h1 className={styles.nvhs}>{title}</h1>
                </div>
                <div className={styles.courselNav}>
                  <div className={styles.cNav3} />
                  <div className={styles.cNav2} />
                  <div className={styles.cNav1} />
                </div>
              </div>
            </div>
            <Project1 images={images} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ViewProject;
