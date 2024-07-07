import { FunctionComponent } from 'react';
import styles from './ContactInfo.module.css';
import { TextField } from '@mui/material';

export type ContactInfoType = {
  className?: string;
};

const ContactInfo: FunctionComponent<ContactInfoType> = ({
  className = '',
}) => {
  return (
    <div className={[styles.contactInfo, className].join(' ')}>
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactInfo1}>
          <a className={styles.contactUs}>Contact Us</a>
        </div>
        <div className={styles.emailInfo}>
          <div className={styles.emailDetails}>
            <img className={styles.emailIcons} alt="" src="/vector22.svg" />
            <div className={styles.infoiribacreativesrw}>
              info@iribacreatives.rw
            </div>
          </div>
          <div className={styles.emailDetails1}>
            <img className={styles.vectorIcon} alt="" src="/vector23.svg" />
            <div className={styles.div}>(250) 787 884 230</div>
          </div>
          <div className={styles.location}>
            <img
              className={styles.locationArrowCircleOIcon}
              loading="lazy"
              alt=""
              src="/locationarrowcircleo.svg"
            />
            <div className={styles.kg599Street}>48 KG 599 Street</div>
          </div>
        </div>
        <div className={styles.socialAccounts}>
          <div className={styles.socialTitle}>
            <div className={styles.social}>Social</div>
          </div>
          <div className={styles.accountDetails}>
            <img
              className={styles.accountIcons}
              loading="lazy"
              alt=""
              src="/frame4.svg"
            />
            <div className={styles.exampleacount}>@exampleAcount</div>
          </div>
          <div className={styles.accountDetails1}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon1} alt="" src="/vector24.svg" />
            </div>
            <div className={styles.exampleacount1}>@exampleAcount</div>
          </div>
          <div className={styles.accountDetails2}>
            <div className={styles.frame}>
              <img className={styles.vectorIcon2} alt="" src="/vector25.svg" />
            </div>
            <div className={styles.exampleacount2}>@exampleAcount</div>
          </div>
          <div className={styles.accountDetails3}>
            <img className={styles.frameIcon} alt="" src="/frame5.svg" />
            <div className={styles.exampleacount3}>@exampleAcount</div>
          </div>
          <div className={styles.accountDetails4}>
            <img className={styles.frameIcon1} alt="" src="/frame6.svg" />
            <div className={styles.exampleacount4}>@exampleAcount</div>
          </div>
        </div>
        <div className={styles.hours}>
          <div className={styles.hoursDetails}>
            <div className={styles.hours1}>Hours</div>
          </div>
          <div className={styles.hoursDetails1}>
            <div className={styles.uhr1300Container}>
              <span className={styles.uhr1300Container1}>
                <p className={styles.uhr}>08:00 - 12.00 Uhr</p>
                <p className={styles.uhr1}>13.00 - 17:00 Uhr</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.formContainerParent}>
        <div className={styles.formContainer}>
          <h2 className={styles.keepInTouch}>Keep in touch</h2>
          <div className={styles.weWouldLoveContainer}>
            <p className={styles.weWouldLove}>
              We would love to hear from you and answer any questions you may
              have. You can contact us by filling out the form below, sending us
              an email, or calling us on our phone number. We will get back to
              you as soon as possible. You can also follow us on our social
              media platforms and subscribe to our newsletter to stay updated on
              our latest news and offers. Thank you for your interest and
              support.
            </p>
          </div>
        </div>
        <div className={styles.form}>
          <TextField
            className={styles.formChild}
            color="primary"
            label="Name"
            required={true}
            variant="outlined"
            sx={{ '& .MuiInputBase-root': { height: '50px' } }}
          />
          <TextField
            className={styles.formChild}
            color="primary"
            label="Email"
            required={true}
            variant="outlined"
            sx={{ '& .MuiInputBase-root': { height: '50px' } }}
          />
          <TextField
            className={styles.formChild}
            color="primary"
            label="Subject"
            required={true}
            variant="outlined"
            sx={{ '& .MuiInputBase-root': { height: '50px' } }}
          />
          <div className={styles.textAreaLightParent}>
            <textarea
              className={styles.textAreaLight}
              placeholder="Some placeholder text here..."
              rows={14}
              cols={33}
            />
            <button className={styles.buttonSubmit}>
              <b className={styles.submit}>Submit</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
