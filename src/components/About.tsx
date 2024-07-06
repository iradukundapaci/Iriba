import { FunctionComponent } from "react";
import styles from "./About.module.css";

export type AboutType = {
  className?: string;
  oURVISION?: string;
  dIGITALSUCCESSANCHOREDINT?: string;
  ourVisionIsToBeTheLeading?: string;
  ketingAgencyGloballyRecog?: string;
  anchoringTheSuccessOfBusi?: string;
  theUnshakableFoundationOf?: string;
  transparencyAndHonesty?: string;
};

const About: FunctionComponent<AboutType> = ({
  className = "",
  oURVISION,
  dIGITALSUCCESSANCHOREDINT,
  ourVisionIsToBeTheLeading,
  ketingAgencyGloballyRecog,
  anchoringTheSuccessOfBusi,
  theUnshakableFoundationOf,
  transparencyAndHonesty,
}) => {
  return (
    <div className={[styles.ourVisionParent, className].join(" ")}>
      <div className={styles.ourVision}>{oURVISION}</div>
      <div className={styles.digitalSuccessAnchoredInTrWrapper}>
        <div className={styles.digitalSuccessAnchored}>
          {dIGITALSUCCESSANCHOREDINT}
        </div>
      </div>
      <div className={styles.ourVisionIsContainer}>
        <span className={styles.ourVisionIsContainer1}>
          <p className={styles.ourVisionIs}>{ourVisionIsToBeTheLeading}</p>
          <p className={styles.ketingAgencyGlobally}>
            {ketingAgencyGloballyRecog}
          </p>
          <p className={styles.anchoringTheSuccess}>
            {anchoringTheSuccessOfBusi}
          </p>
          <p className={styles.theUnshakableFoundation}>
            {theUnshakableFoundationOf}
          </p>
          <p className={styles.transparencyAndHonesty}>
            {transparencyAndHonesty}
          </p>
        </span>
      </div>
    </div>
  );
};

export default About;
