import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Team.module.css";

export type TeamType = {
  className?: string;
  background31?: string;
  kalisaHonore?: string;
  webAppDirector?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const Team: FunctionComponent<TeamType> = ({
  className = "",
  background31,
  kalisaHonore,
  webAppDirector,
  propHeight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={[styles.background31Parent, className].join(" ")}
      style={frameDivStyle}
    >
      <img className={styles.background31Icon} alt="" src={background31} />
      <div className={styles.name}>
        <b className={styles.munezeroPeter}>{kalisaHonore}</b>
        <div className={styles.founderLead}>{webAppDirector}</div>
      </div>
    </div>
  );
};

export default Team;
