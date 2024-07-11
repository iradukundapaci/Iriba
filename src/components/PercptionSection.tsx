import { FunctionComponent } from 'react';
import { Button } from '@mui/material';
import styles from './PercptionSection.module.css';
import { Link } from 'react-router-dom';

export type PercptionSectionType = {
  className?: string;
};

const PercptionSection: FunctionComponent<PercptionSectionType> = ({
  className = '',
}) => {
  return (
    <div className={[styles.percptionSection, className].join(' ')}>
      <b className={styles.yourGatewayTo}>Your gateway to brand perception!</b>
      <Link to="/portfolio">
        <Button
          disableElevation
          color="secondary"
          variant="outlined"
          href="/about-us"
          sx={{ borderRadius: '0px 0px 0px 0px', height: 48 }}
        >
          Learn more...
        </Button>
      </Link>
    </div>
  );
};

export default PercptionSection;
