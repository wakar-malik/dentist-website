import Card from "../../components/Card/Card";
import Section from "../../components/Section/Section";
import IMAGES from "../../constants/Images";
import Image from "../../components/Image/Image";
import styles from "./Welcome.module.css";
import Button from "../../components/Button/Button";

const welcomeCardData = [
  {
    cardImg: IMAGES.telephoneCard,
    cardTitle: "Easy Appointment",
    cardDescription:
      "Lorem Ipsum is simply is ijnwin wijnwun wu uwuw very dummy text of the printings and type setting",
  },
  {
    cardImg: IMAGES.doctorCard,
    cardTitle: "Emergency Service",
    cardDescription:
      "Get our text demo is simply dummy text of the printings and type for content",
  },
  {
    cardImg: IMAGES.plusCard,
    cardTitle: "24/7 Service",
    cardDescription:
      "Lorem Ipsum is demo simply dummy text of the printings and type and setting",
  },
];

function Welcome() {
  return (
    <Section className={`${styles.welcomeSection} globalWidth globalPadding`}>
      <WelcomeCards welcomeCardData={welcomeCardData} />
      <Family />
    </Section>
  );
}

function WelcomeCards({ welcomeCardData }) {
  return (
    <div className={styles.welcomeCardContainer}>
      {welcomeCardData.map((card, index) => (
        <Card key={index} className={styles.welcomeCard}>
          <div className={styles.welcomeCardImgContainer}>
            <Image src={card.cardImg} className={styles.welcomeCardImg} />
          </div>
          <h1 className={styles.welcomeCardTitle}>{card.cardTitle}</h1>
          <p className={styles.welcomeCardDesc}>{card.cardDescription}</p>
        </Card>
      ))}
    </div>
  );
}

function Family() {
  return (
    <Section className={styles.familySection}>
      <div className={styles.familyContainer}>
        <div className={styles.familyLeft}>
          <div className={styles.familyImgContainer}>
            <Image
              src={IMAGES.tooth2}
              alt="tooth-img"
              className={styles.familyImage}
            />
            <Image
              src={IMAGES.familyAnima}
              alt="animated-img"
              className={styles.animatedImg}
            />
          </div>
        </div>
        <div className={styles.familyRight}>
          <h1 className={styles.familyHeading}>Welcome to a Family</h1>
          <p className={styles.familyDesc}>
            Welcome to Datobbo Dental represents everything going to dentist
            necessary. We have upgraded your dreaded dentist appointment and
            transformed it into a relaxing.
          </p>
          <Button className={styles.familyButton}>About Us</Button>
          <Card className={styles.familyCard}>
            <div className={styles.familyCardLeft}>
              <div className={styles.familyCardColumn}>
                <h1 className={styles.familyCardColumnTitle}>500+</h1>
                <p className={styles.familyCardColumnSubTitle}>
                  Happy Patients
                </p>
              </div>
              <div className={styles.familyCardColumn}>
                <h1 className={styles.familyCardColumnTitle}>25+</h1>
                <p className={styles.familyCardColumnSubTitle}>
                  Year Experience
                </p>
              </div>
            </div>
            <div className={styles.familyCardRight}>
              <div className={styles.familyCardColumn}>
                <h1 className={styles.familyCardColumnTitle}>88+</h1>
                <p className={styles.familyCardColumnSubTitle}>
                  Qualified Doctors
                </p>
              </div>
              <div className={styles.familyCardColumn}>
                <h1 className={styles.familyCardColumnTitle}>55+</h1>
                <p className={styles.familyCardColumnSubTitle}>Dental Awards</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

export default Welcome;
