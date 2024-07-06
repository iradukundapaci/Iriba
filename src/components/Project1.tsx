import { FunctionComponent } from "react";
import styles from "./Project1.module.css";

export type Project1Type = {
  className?: string;
};

const Project1: FunctionComponent<Project1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.project, className].join(" ")}>
      <div className={styles.covers01Wrapper}>
        <img
          className={styles.covers01Icon}
          loading="lazy"
          alt=""
          src="/covers01@2x.png"
        />
      </div>
      <img
        className={styles.covers02Icon}
        loading="lazy"
        alt=""
        src="/covers02@2x.png"
      />
      <img
        className={styles.nuInsightMagazineIcon}
        loading="lazy"
        alt=""
        src="/nuinsight-magazine@2x.png"
      />
    </div>
  );
};

export default Project1;
