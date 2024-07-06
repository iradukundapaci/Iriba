import { FunctionComponent } from "react";
import TeamInfo from "./TeamInfo";
import ContactInfo from "./ContactInfo";
import styles from "./TeamContent.module.css";

export type TeamContentType = {
  className?: string;
};

const TeamContent: FunctionComponent<TeamContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.teamContent, className].join(" ")}>
      <TeamInfo />
      <ContactInfo />
    </div>
  );
};

export default TeamContent;
