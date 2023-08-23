import Card from "../../components/Card/Card";
import Section from "../../components/Section/Section";
import IMAGES from "../../constants/Images";
import Image from "../../components/Image/Image";
import styles from "./Welcome.module.css";

const cardData = [
  {
    cardImg: IMAGES.telephoneCard,
    cardTitle: "Easy Appointment",
    cardDescription:
      "Lorem Ipsum is simply is very dummy text of the printings and type setting",
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
      <Cards cardData={cardData} />
    </Section>
  );
}

function Cards({ cardData }) {
  return (
    <div className={styles.cardContainer}>
      {cardData.map((card, index) => (
        <Card key={index} className={styles.card}>
          <div className={styles.cardImgContainer}>
            <Image src={card.cardImg} className={styles.cardImg} />
          </div>
          <h1 className={styles.cardTitle}>{card.cardTitle}</h1>
          <p className={styles.cardDesc}>{card.cardDescription}</p>
        </Card>
      ))}
    </div>
  );
}

export default Welcome;
