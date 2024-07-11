import { FunctionComponent } from 'react';
import { TextField, InputAdornment, Icon, IconButton } from '@mui/material';
import styles from './Footer.module.css';

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = '' }) => {
  return (
    <footer className={[styles.footer, className].join(' ')}>
      <div className={styles.upperFooter}>
        <div className={styles.companyInfo}>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.vectorIcon}
              alt="Company Logo"
              src="/vector13.svg"
            />
          </div>
          <div className={styles.directions}>
            <p className={styles.remeraKigaliRwanda}>Remera, Kigali-Rwanda</p>
            <p className={styles.kg599Street}>48 KG 599 Street</p>
            <p className={styles.contactInfo}>(250) 787 884 230</p>
            <p className={styles.contactInfo}>info@iribacreatives.rw</p>
          </div>
        </div>
        <nav className={styles.footerNavigation}>
          <a href="/" className={styles.navLink}>
            Home
          </a>
          <a href="/about" className={styles.navLink}>
            About us
          </a>
          <a href="/portfolio" className={styles.navLink}>
            Portfolio
          </a>
          <a href="/blog" className={styles.navLink}>
            Blog
          </a>
          <a href="/contact" className={styles.navLink}>
            Contact us
          </a>
        </nav>
        <div className={styles.emailSubscription}>
          <p className={styles.keepInTouch}>KEEP IN TOUCH</p>
          <p className={styles.stayUpTo}>Stay up to date with our content</p>
          <div className={styles.subscriptionForm}>
            <TextField
              variant="outlined"
              color="secondary"
              placeholder="Enter your email address"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <Icon>send</Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'var(--color-darkgray-100)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'var(--color-darkgray-100)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'var(--color-darkgray-100)',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'var(--color-darkgray-100)',
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.lowerFooter}>
        <p className={styles.iribaCreativesAll}>
          &copy; 2024 Iriba Creatives, All Rights Reserved
        </p>
        <div className={styles.footerIcons}>
          <a href="#" aria-label="Facebook">
            <img className={styles.icon} alt="Facebook" src="/vector15.svg" />
          </a>
          <a href="#" aria-label="Twitter">
            <img className={styles.icon} alt="Twitter" src="/vector16.svg" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img className={styles.icon} alt="LinkedIn" src="/vector17.svg" />
          </a>
          <a href="#" aria-label="Instagram">
            <img className={styles.icon} alt="Instagram" src="/vector18.svg" />
          </a>
          <a href="#" aria-label="YouTube">
            <img className={styles.icon} alt="YouTube" src="/vector19.svg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
