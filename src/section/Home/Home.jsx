import React from "react";
import styles from "./Home.module.css";
import IMAGES from "../../constants/Images";
import Image from "../../components/Image/Image";
import Navbar from "../navbar/Navbar";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";

function Home() {
  return (
    <Section className={`${styles.homeSection}`}>
      <Navbar />

      <div className={`${styles.homeContainer} globalWidth`}>
        <div className={styles.homeLeft}>
          <h4 className={styles.heading}>Better Life Through</h4>
          <h1 className={styles.mainHeading}>Better Dentistry</h1>
          <p className={styles.description}>
            Join us to a fun and friendly dental environment. Our professionals
            are working so hard to see smile on your face that you deserve! We
            are dedicated about our duties.
          </p>

          <div className={styles.btnContainer}>
            <Button className={styles.appointmentBtn}>Appointment</Button>
            <Button className={styles.learnBtn}>Learn More</Button>
          </div>
        </div>
        <div className={styles.homeRight}>
          <div className={styles.imageContainer}>
            <Image
              src={IMAGES.tooth}
              alt="tooth-image"
              className={styles.toothImg}
            />
            <Image
              src={IMAGES.cloud}
              alt="tooth-image"
              className={styles.cloudImg}
            />
            <Image
              src={IMAGES.nurse}
              alt="nurse-image"
              className={styles.nurseImg}
            />
            <Image
              src={IMAGES.doctor}
              alt="doctor-image"
              className={styles.doctorImg}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Home;
