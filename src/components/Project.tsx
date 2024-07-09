import { FunctionComponent } from 'react';
import styles from './Project.module.css';
import { Link } from 'react-router-dom';

export type ProjectType = {
  className?: string;
  rectangle205?: string;
  task?: string;
  title?: string;
  link?: string;
};

const Project: FunctionComponent<ProjectType> = ({
  className = '',
  rectangle205,
  task,
  title,
  link,
}) => {
  return (
    <Link
      to={`/portfolio/${link}`}
      className={[styles.project, className].join(' ')}
      style={{ textDecoration: 'none' }}
    >
      <img
        className={styles.projectImagesIcon}
        loading="lazy"
        alt=""
        src={rectangle205}
      />
      <div className={styles.projectDetail}>
        <b className={styles.portfolioTitle}>{title}</b>
        <div className={styles.weCreatedAContainer}>
          <p className={styles.portfolioTask}>{task}</p>
        </div>
      </div>
    </Link>
  );
};

export default Project;
