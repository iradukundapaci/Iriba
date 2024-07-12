import React from 'react';
import { useParams } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar';
import Project1 from '../components/Project1';
import Footer from '../components/Footer';
import styles from './ViewProject.module.css';
import TopBar from '../components/TopBar';

const ViewProject: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  if (!title) {
    return <div>Invalid project title or number of images.</div>;
  }

  const [titles, numberOfImagesStr] = title.split('-');
  const numberOfImages = parseInt(numberOfImagesStr, 10);

  if (isNaN(numberOfImages) || numberOfImages <= 0) {
    return <div>Invalid number of images.</div>;
  }

  const images: string[] = [];
  for (let i = 1; i <= numberOfImages; i++) {
    images.push(`/${titles}/image${i}.jpg`);
  }

  return (
    <div className={styles.viewProject}>
      <TopBar />
      <TopNavbar />
      <main className={styles.mainContent}>
        <section className={styles.body}>
          <div className={styles.contentWrapper}>
            <div className={styles.innerContent}>
              <div className={styles.frameParent}>
                <h1 className={styles.nvhs}>{titles}</h1>
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
