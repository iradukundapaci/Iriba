import { FunctionComponent } from "react";
import TopNavbar from "../components/TopNavbar";
import Project1 from "../components/Project1";
import Footer from "../components/Footer";
import styles from "./ViewProject.module.css";

const ViewProject: FunctionComponent = () => {
  return (
    <div className={styles.viewProject}>
      <div className={styles.topBar}>
        <div className={styles.bar1} />
        <div className={styles.bar2} />
        <div className={styles.bar3} />
      </div>
      <main className={styles.mainContent}>
        <TopNavbar />
        <section className={styles.body}>
          <div className={styles.contentWrapper}>
            <div className={styles.innerContent}>
              <div className={styles.frameParent}>
                <div className={styles.nvhsWrapper}>
                  <h1 className={styles.nvhs}>N.V.H.S</h1>
                </div>
                <div className={styles.courselNav}>
                  <div className={styles.cNav3} />
                  <div className={styles.cNav2} />
                  <div className={styles.cNav1} />
                </div>
              </div>
            </div>
            <Project1 />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ViewProject;
