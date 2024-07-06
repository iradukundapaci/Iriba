import { FunctionComponent } from "react";
import styles from "./ServicesSection.module.css";

export type ServicesSectionType = {
  className?: string;
};

const ServicesSection: FunctionComponent<ServicesSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.servicesSection, className].join(" ")}>
      <b className={styles.ourServices}>OUR SERVICES</b>
      <div className={styles.serviceCards}>
        <div className={styles.serviceCard}>
          <div className={styles.div}>01</div>
          <div className={styles.service}>
            <b className={styles.brandPromotion}>Brand Promotion</b>
            <b className={styles.whenCustomersRegularly}>
              When customers regularly engage with your brand, they tend to
              become loyal, often choosing you over competitors and being
              willing to pay more for a brand they trust.
            </b>
          </div>
        </div>
        <div className={styles.serviceCard1}>
          <div className={styles.div1}>02</div>
          <div className={styles.service1}>
            <b className={styles.communication}>Communication</b>
            <b className={styles.clearMessagingAbout}>
              Clear messaging about your company's strengths can attract
              customers and set you apart. Even on bad days, customers want to
              see your message.
            </b>
          </div>
        </div>
        <div className={styles.serviceCard2}>
          <div className={styles.div2}>03</div>
          <div className={styles.service2}>
            <b className={styles.visibility}>Visibility</b>
            <b className={styles.digitalPlatformsEnable}>
              Digital platforms enable precise targeting of demographics,
              interests, and behaviors. We ensure your messages reach the right
              audience.
            </b>
          </div>
        </div>
      </div>
      <div className={styles.linePattern2}>
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
    </div>
  );
};

export default ServicesSection;
