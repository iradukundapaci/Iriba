import { FunctionComponent } from 'react';
import Team from './Team';
import styles from './OurTeamSection.module.css';

export type OurTeamSectionType = {
  className?: string;
};

const OurTeamSection: FunctionComponent<OurTeamSectionType> = ({
  className = '',
}) => {
  return (
    <div className={[styles.ourTeamSection, className].join(' ')}>
      <div className={styles.ourTeamTitle}>
        <b className={styles.ourCircle}>Our Circle</b>
        <div className={styles.courselNav}>
          <div className={styles.cNav3} />
          <div className={styles.cNav2} />
          <div className={styles.cNav1} />
        </div>
      </div>
      <b className={styles.ifEveryoneIsContainer}>
        <span>{` `}</span>
        <span className={styles.ifEveryoneIs}>
          “If everyone is moving forward together, then success takes care of
          itself.”
        </span>
        <span className={styles.henryFord}>{` Henry Ford            `}</span>
      </b>
      <div className={styles.frameParent}>
        <Team
          background31="/background3-1@2x.png"
          kalisaHonore="MUNEZERO Peter"
          webAppDirector={`Founder & Lead Creative`}
        />
        <Team
          background31="/background3-11@2x.png"
          kalisaHonore="Ngago .U Kenny"
          webAppDirector={`Co-Founder & Lead Strategist`}
        />
        <Team
          background31="/background3-111@2x.png"
          kalisaHonore="Gasana Eddy"
          webAppDirector={`CEO   `}
        />
        <Team
          background31="/background3-12@2x.png"
          kalisaHonore="Kalisa Honore"
          webAppDirector={`Web/ App Director`}
        />
        <Team
          background31="/background3-13@2x.png"
          kalisaHonore="Elvin Mugeni"
          webAppDirector={`CREATIVE DIRECTOR`}
        />
        <Team
          background31="/background3-14@2x.png"
          kalisaHonore="Paul N. Palvis"
          webAppDirector={`COMMUNICATIONS`}
        />
      </div>
    </div>
  );
};

export default OurTeamSection;
