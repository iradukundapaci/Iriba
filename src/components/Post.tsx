import { FunctionComponent } from "react";
import styles from "./Post.module.css";

export type PostType = {
  className?: string;
  rectangle1?: string;
  userIcon1?: string;
  christellaI?: string;
  addressingThePhysicalAndM?: string;
};

const Post: FunctionComponent<PostType> = ({
  className = "",
  rectangle1,
  userIcon1,
  christellaI,
  addressingThePhysicalAndM,
}) => {
  return (
    <div className={[styles.post, className].join(" ")}>
      <img className={styles.postChild} alt="" src={rectangle1} />
      <div className={styles.postInfo}>
        <div className={styles.poster}>
          <img className={styles.userIcon1} alt="" src={userIcon1} />
          <b className={styles.christellaI}>{christellaI}</b>
        </div>
        <div className={styles.postDate}>
          <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
          <b className={styles.feb42023}>Feb 4,2023</b>
        </div>
      </div>
      <b className={styles.addressingThePhysical}>
        {addressingThePhysicalAndM}
      </b>
    </div>
  );
};

export default Post;
