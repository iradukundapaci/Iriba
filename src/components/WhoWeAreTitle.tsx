import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./WhoWeAreTitle.module.css";

export type WhoWeAreTitleType = {
  className?: string;
  wHOWEARE?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
};

const WhoWeAreTitle: FunctionComponent<WhoWeAreTitleType> = ({
  className = "",
  wHOWEARE,
  propGap,
}) => {
  const whoWeAreTitleStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={[styles.whoWeAreTitle, className].join(" ")}
      style={whoWeAreTitleStyle}
    >
      <b className={styles.whoWeAre}>{wHOWEARE}</b>
      <div className={styles.pattern7Parent}>
        <div className={styles.pattern7}>
          <div className={styles.frame}>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <img className={styles.groupIcon1} alt="" src="/group1.svg" />
            <img className={styles.groupIcon2} alt="" src="/group2.svg" />
            <img className={styles.groupIcon3} alt="" src="/group3.svg" />
          </div>
          <img className={styles.groupIcon4} alt="" src="/group4.svg" />
        </div>
        <div className={styles.pattern8}>
          <div className={styles.frame1}>
            <img className={styles.groupIcon5} alt="" src="/group.svg" />
            <img className={styles.groupIcon6} alt="" src="/group1.svg" />
            <img className={styles.groupIcon7} alt="" src="/group2.svg" />
            <img className={styles.groupIcon8} alt="" src="/group3.svg" />
          </div>
          <img className={styles.groupIcon9} alt="" src="/group4.svg" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreTitle;
