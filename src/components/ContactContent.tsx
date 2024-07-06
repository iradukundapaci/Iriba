import { FunctionComponent } from "react";
import styles from "./ContactContent.module.css";

export type ContactContentType = {
  className?: string;
};

const ContactContent: FunctionComponent<ContactContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.contactContent, className].join(" ")}>
      <div className={styles.ourTeamTitle}>
        <div className={styles.projectHeader}>
          <h1 className={styles.projects}>Projects</h1>
        </div>
        <div className={styles.courselNav}>
          <div className={styles.cNav3} />
          <div className={styles.cNav2} />
          <div className={styles.cNav1} />
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
