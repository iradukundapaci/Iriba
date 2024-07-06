import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./Subscription.module.css";

export type SubscriptionType = {
  className?: string;
};

const Subscription: FunctionComponent<SubscriptionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.subscription, className].join(" ")}>
      <div className={styles.linePattern3}>
        <div className={styles.frame}>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
          <img className={styles.groupIcon} alt="" src="/group5.svg" />
        </div>
        <div className={styles.frame1}>
          <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
          <img className={styles.groupIcon1} alt="" src="/group6.svg" />
        </div>
        <div className={styles.frame2}>
          <img className={styles.frameIcon2} alt="" src="/frame2.svg" />
          <img className={styles.groupIcon2} alt="" src="/group7.svg" />
        </div>
        <div className={styles.frame3}>
          <img className={styles.frameIcon3} alt="" src="/frame3.svg" />
          <img className={styles.groupIcon3} alt="" src="/group7.svg" />
        </div>
        <div className={styles.frame4}>
          <img className={styles.frameIcon4} alt="" src="/frame2.svg" />
          <img className={styles.groupIcon4} alt="" src="/group7.svg" />
        </div>
        <div className={styles.frame5}>
          <img className={styles.frameIcon5} alt="" src="/frame2.svg" />
          <img className={styles.groupIcon5} alt="" src="/group7.svg" />
        </div>
        <div className={styles.frame6}>
          <img className={styles.frameIcon6} alt="" src="/frame2.svg" />
          <img className={styles.groupIcon6} alt="" src="/group7.svg" />
        </div>
        <div className={styles.frame7}>
          <img className={styles.frameIcon7} alt="" src="/frame2.svg" />
          <img className={styles.groupIcon7} alt="" src="/group7.svg" />
        </div>
        <div className={styles.frame8}>
          <img className={styles.frameIcon8} alt="" src="/frame2.svg" />
          <img className={styles.groupIcon8} alt="" src="/group7.svg" />
        </div>
        <div className={styles.frame9}>
          <img className={styles.frameIcon9} alt="" src="/frame2.svg" />
          <img className={styles.groupIcon9} alt="" src="/group7.svg" />
        </div>
      </div>
      <div className={styles.emailSubcription}>
        <b className={styles.reachOut}>Reach out</b>
        <div className={styles.allUpdatesOn}>
          All updates on new collections, exclusive offers; you name it!
        </div>
        <TextField
          className={styles.email}
          color="primary"
          label="Enter Your Email Address"
          required={true}
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "40px" }, width: "270px" }}
        />
        <Button
          className={styles.subscriptionBtn}
          disableElevation
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 270, height: 40 }}
        >
          Subcribe Now
        </Button>
      </div>
    </div>
  );
};

export default Subscription;
