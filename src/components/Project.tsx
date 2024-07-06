import { FunctionComponent } from "react";
import styles from "./Project.module.css";

export type ProjectType = {
  className?: string;
  rectangle205?: string;
};

const Project: FunctionComponent<ProjectType> = ({
  className = "",
  rectangle205,
}) => {
  return (
    <div className={[styles.project, className].join(" ")}>
      <img
        className={styles.projectImagesIcon}
        loading="lazy"
        alt=""
        src={rectangle205}
      />
      <div className={styles.projectDetail}>
        <b className={styles.nuVisionHighSchool}>NU-VISION HIGH SCHOOL</b>
        <div className={styles.weCreatedAContainer}>
          <p className={styles.weCreatedA}>
            We created a colourful and engaging school magazine
          </p>
          <p className={styles.usingOurPublishing}>
            using our publishing and layout design skills that
          </p>
          <p className={styles.brilliantlyRepresentedTheir}>
            brilliantly represented their academic experience
          </p>
          <p className={styles.whileRepresentingThe}>
            while representing the essence of their Cambridge
          </p>
          <p className={styles.internationalSchoolDistincti}>
            International School distinction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
