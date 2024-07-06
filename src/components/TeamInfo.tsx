import { FunctionComponent } from "react";
import OurTeamTitle from "./OurTeamTitle";
import styles from "./TeamInfo.module.css";

export type TeamInfoType = {
  className?: string;
};

const TeamInfo: FunctionComponent<TeamInfoType> = ({ className = "" }) => {
  return (
    <div className={[styles.teamInfo, className].join(" ")}>
      <OurTeamTitle ourCircle="Contact us" />
    </div>
  );
};

export default TeamInfo;
