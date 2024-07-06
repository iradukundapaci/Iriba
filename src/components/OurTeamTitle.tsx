import { FunctionComponent } from "react";
import styles from "./OurTeamTitle.module.css";

export type OurTeamTitleType = {
  className?: string;
  ourCircle?: string;
};

const OurTeamTitle: FunctionComponent<OurTeamTitleType> = ({
  className = "",
  ourCircle,
}) => {
  return (
    <div className={[styles.ourTeamTitle, className].join(" ")}>
      <div className={styles.teamTitle}>
        <h1 className={styles.contactUs}>{ourCircle}</h1>
      </div>
      <div className={styles.courselNav}>
        <div className={styles.cNav3} />
        <div className={styles.cNav2} />
        <div className={styles.cNav1} />
      </div>
    </div>
  );
};

export default OurTeamTitle;
