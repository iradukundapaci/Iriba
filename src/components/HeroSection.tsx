import { FunctionComponent, useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./HeroSection.module.css";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: FunctionComponent<HeroSectionType> = ({
  className = "",
}) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={[styles.heroSection, className].join(" ")}>
      <div className={styles.heroText}>
        <div className={styles.pattern6Parent}>
          <div className={styles.pattern6}>
            <div className={styles.frame}>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <img className={styles.groupIcon1} alt="" src="/group1.svg" />
              <img className={styles.groupIcon2} alt="" src="/group2.svg" />
              <img className={styles.groupIcon3} alt="" src="/group3.svg" />
            </div>
            <img className={styles.groupIcon4} alt="" src="/group4.svg" />
          </div>
          <div className={styles.pattern7}>
            <div className={styles.frame1}>
              <img className={styles.groupIcon5} alt="" src="/group.svg" />
              <img className={styles.groupIcon6} alt="" src="/group1.svg" />
              <img className={styles.groupIcon7} alt="" src="/group2.svg" />
              <img className={styles.groupIcon8} alt="" src="/group3.svg" />
            </div>
            <img className={styles.groupIcon9} alt="" src="/group4.svg" />
          </div>
        </div>
        <div className={styles.craftingDigitalDreamsContainer}>
          <b>Crafting Digital Dreams</b>
          <span className={styles.span}>!</span>
        </div>
        <div className={styles.offeringSeamlessEvent}>
          Offering seamless event coverage and compelling ads
        </div>
        <Button
          className={styles.getStartedBtn}
          disableElevation
          color="primary"
          variant="contained"
          href="/contact-us"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 220, height: 64 }}
          data-animate-on-scroll
        >
          Get started!
        </Button>
      </div>
      <div className={styles.courselNav}>
        <div className={styles.cNav3} />
        <div className={styles.cNav2} />
        <div className={styles.cNav1} />
      </div>
    </div>
  );
};

export default HeroSection;
