import { FunctionComponent } from "react";
import styles from "./TopBar.module.css";

export type TopBarType = {
  className?: string;
};

const TopBar: FunctionComponent<TopBarType> = ({ className = "" }) => {
  return (
    <div className={[styles.topBar, className].join(" ")}>
      <div className={styles.bar1} />
      <div className={styles.bar2} />
      <div className={styles.bar3} />
    </div>
  );
};

export default TopBar;
