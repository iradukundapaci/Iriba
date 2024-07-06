import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.upperFooter}>
        <div className={styles.companyInfo}>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
          </div>
          <div className={styles.directions}>
            <b className={styles.remeraKigaliRwanda}>Remera, Kigali-Rwanda</b>
            <b className={styles.kg599Street}>48 KG 599 Street</b>
            <b className={styles.b}>(250) 787 884 230</b>
            <b className={styles.infoiribacreativesrw}>
              info@iribacreatives.rw
            </b>
          </div>
        </div>
        <div className={styles.footerNavigation}>
          <b className={styles.home}>Home</b>
          <b className={styles.aboutUs}>About us</b>
          <b className={styles.portfolio}>Portfolio</b>
          <b className={styles.blog}>Blog</b>
          <b className={styles.contactUs}>Contact us</b>
        </div>
        <div className={styles.emailSubcription}>
          <b className={styles.keepInTouch}>KEEP IN TOUCH</b>
          <b className={styles.stayUpTo}>Stay up to date with our content</b>
          <div className={styles.getStartedBtn}>
            <img className={styles.vectorIcon1} alt="" src="/vector14.svg" />
            <TextField
              className={styles.enterYourEmail}
              color="primary"
              label="Enter your email address"
              required={true}
              variant="outlined"
              sx={{ "& .MuiInputBase-root": { height: "15px" } }}
            />
          </div>
        </div>
      </div>
      <div className={styles.lowerFooter}>
        <b className={styles.iribaCreativesAll}>
          @2024 Iriba Creatives, All Rights Reserved
        </b>
        <div className={styles.footerIcons}>
          <img className={styles.vectorIcon2} alt="" src="/vector15.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector16.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector17.svg" />
          <img className={styles.vectorIcon5} alt="" src="/vector18.svg" />
          <img className={styles.vectorIcon6} alt="" src="/vector19.svg" />
          <img className={styles.vectorIcon7} alt="" src="/vector20.svg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
