import React from "react";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import IMAGES from "../../constants/Images";
import styles from "./Appointment.module.css";

function Appointment() {
  return (
    <Section className={styles.appointSection}>
      <div className={`${styles.appointContainer} globalWidth`}>
        <div className={styles.appointLeft}>
          <h1 className={styles.appointHeading}>
            Request your appointment and start your smile makeover!
          </h1>
          <Button className={styles.appointBtn}>Request Appointment</Button>
        </div>
        <div className={styles.appointRight}>
          <Image
            src={IMAGES.appointment}
            className={styles.appointRightDocImage}
          />
        </div>
      </div>
    </Section>
  );
}

export default Appointment;
