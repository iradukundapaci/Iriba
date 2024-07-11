import { FunctionComponent } from 'react';
import styles from './Project1.module.css';

export type Project1Type = {
  className?: string;
  images: string[];
};

const Project1: FunctionComponent<Project1Type> = ({
  className = '',
  images,
}) => {
  return (
    <div className={[styles.project, className].join(' ')}>
      {images.map((src, index) => (
        <div key={index} className={styles.imageWrapper}>
          <img className={styles.covers02Icon} loading="lazy" src={src} />
        </div>
      ))}
    </div>
  );
};

export default Project1;
