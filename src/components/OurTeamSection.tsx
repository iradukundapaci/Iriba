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
        <div className={styles.background31Parent}>
          <img
            className={styles.background31Icon}
            alt=""
            src="/background3-11@2x.png"
          />
          <div className={styles.name}>
            <b className={styles.ngagoUKenny}>Ngago .U Kenny</b>
            <div
              className={styles.coFounderLead}
            >{`Co-Founder & Lead Strategist`}</div>
          </div>
        </div>
        <div className={styles.background31Group}>
          <img
            className={styles.background31Icon1}
            alt=""
            src="/background3-111@2x.png"
          />
          <div className={styles.name1}>
            <b className={styles.gasanaEddy}>Gasana Eddy</b>
            <div className={styles.ceo}>{`CEO   `}</div>
          </div>
        </div>
        <div className={styles.background31Container}>
          <img
            className={styles.background31Icon2}
            alt=""
            src="/background3-12@2x.png"
          />
          <div className={styles.name2}>
            <b className={styles.kalisaHonore}>Kalisa Honore</b>
            <div className={styles.webAppDirector}>Web/ App Director</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <img
            className={styles.background31Icon3}
            alt=""
            src="/background3-13@2x.png"
          />
          <div className={styles.name3}>
            <b className={styles.elvinMugeni}>Elvin Mugeni</b>
            <div className={styles.creativeDirector}>CREATIVE DIRECTOR</div>
          </div>
        </div>
        <div className={styles.background31Parent1}>
          <img
            className={styles.background31Icon4}
            alt=""
            src="/background3-14@2x.png"
          />
          <div className={styles.name4}>
            <b className={styles.paulNPalvis}>Paul N. Palvis</b>
            <div className={styles.communications}>COMMUNICATIONS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
