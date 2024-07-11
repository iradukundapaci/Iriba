import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import WhoWeAreTitle from "./WhoWeAreTitle";
import styles from "./WhoWeAreSection.module.css";
import { Link } from "react-router-dom";

export type WhoWeAreSectionType = {
  className?: string;
  rectangle206?: string;

  /** Style props */
  whoWeAreSectionBackgroundColor?: CSSProperties["backgroundColor"];
  whoWeAreSectionBackground?: CSSProperties["background"];
};

const WhoWeAreSection: FunctionComponent<WhoWeAreSectionType> = ({
  className = "",
  rectangle206,
  whoWeAreSectionBackgroundColor,
  whoWeAreSectionBackground,
}) => {
  const whoWeAreSectionStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: whoWeAreSectionBackgroundColor,
      background: whoWeAreSectionBackground,
    };
  }, [whoWeAreSectionBackgroundColor, whoWeAreSectionBackground]);

  return (
    <div
      className={[styles.whoWeAreSection, className].join(' ')}
      style={whoWeAreSectionStyle}
    >
      <img className={styles.whoWeAreSectionChild} alt="" src={rectangle206} />
      <div className={styles.whoWeAreSection1}>
        <WhoWeAreTitle wHOWEARE="WHO WE ARE" />
        <div className={styles.atIribaCreatives}>
          At Iriba Creatives we are dedicated to helping budding brands harness
          the full power of the digital landscape. We offer a comprehensive
          range of services, from SEO and social media management to
          pay-per-click advertising and content creation. We understand that
          every brand has a unique story to tell, and we work tirelessly to
          ensure that story reaches the right audience at the right time.
        </div>
        <Link className={styles.aboutUs} to="/contact-us">
          <Button
            className={styles.contactUsBtn}
            disableElevation
            color="primary"
            variant="contained"
            href="/contact-us"
            sx={{ borderRadius: '0px 0px 0px 0px', width: 197, height: 53 }}
          >
            Contact us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
