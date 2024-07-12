import { FunctionComponent } from 'react';
import styles from './Top.module.css';
import TopBar from './TopBar';
import TopNavbar from './TopNavbar';

export type TopType = {
  className?: string;
};

const Top: FunctionComponent<TopType> = ({ className = '' }) => {
  return (
    <div className={[styles.top, className].join(' ')}>
      <TopBar />
      <TopNavbar />
    </div>
  );
};

export default Top;
