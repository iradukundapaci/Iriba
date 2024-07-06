import { FunctionComponent } from "react";
import About from "./About";
import styles from "./AboutUsContent.module.css";

export type AboutUsContentType = {
  className?: string;
};

const AboutUsContent: FunctionComponent<AboutUsContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.aboutUsContent, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.ourMissionParent}>
          <div className={styles.ourMission}>OUR MISSION</div>
          <div className={styles.truthInEveryPixelWrapper}>
            <div className={styles.truthInEvery}>TRUTH IN EVERY PIXEL</div>
          </div>
          <div className={styles.weAreCommittedContainer}>
            <span className={styles.weAreCommittedContainer1}>
              <p className={styles.weAreCommitted}>
                We are committed to delivering digital market-
              </p>
              <p className={styles.ingSolutionsWith}>
                ing solutions with unwavering honesty , focusing
              </p>
              <p className={styles.onRealResults}>
                on real results, genuine engagement and ethi-
              </p>
              <p className={styles.calPractices}>cal practices.</p>
            </span>
          </div>
        </div>
        <img className={styles.target1Icon} alt="" src="/target-1@2x.png" />
      </div>
      <div className={styles.binoculars1Parent}>
        <img
          className={styles.binoculars1Icon}
          alt=""
          src="/binoculars-1@2x.png"
        />
        <About
          oURVISION="OUR VISION"
          dIGITALSUCCESSANCHOREDINT="DIGITAL SUCCESS ANCHORED IN TRUTH"
          ourVisionIsToBeTheLeading="Our vision is to be the leading digital mar-"
          ketingAgencyGloballyRecog="keting agency globally, recognized for"
          anchoringTheSuccessOfBusi="anchoring the success of businesses in"
          theUnshakableFoundationOf="the unshakable foundation of truth,"
          transparencyAndHonesty="transparency, and honesty."
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.ourValuesParent}>
          <div className={styles.ourValues}>OUR VALUES</div>
          <div className={styles.innovationThatResonatesAndWrapper}>
            <div className={styles.innovationThatResonates}>
              INNOVATION THAT RESONATES AND INSPIRES
            </div>
          </div>
          <div className={styles.ourVisionIs}>
            Our vision is to be the leading digital marketing agency, forging
            deep connections between companies and customers through
            collaborative design.
          </div>
        </div>
        <img className={styles.values1Icon} alt="" src="/values-1@2x.png" />
      </div>
    </div>
  );
};

export default AboutUsContent;
