import Section from "../../components/Section/Section";
import IMAGES from "../../constants/Images";
import Image from "../../components/Image/Image";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import styles from "./Treatment.module.css";

const TreatmentData = [
  {
    img: IMAGES.treatment1,
    title: "Complete Dentistry",
    description:
      "Lorem Ipsum is simply dummy text of the printings and type and setting for content",
  },
  {
    img: IMAGES.treatment2,
    title: "Dental Selants",
    description:
      "Lorem Ipsum is simply dummy text of the printings and type and setting for content",
  },
  {
    img: IMAGES.treatment3,
    title: "Dental Dictionary",
    description:
      "Lorem Ipsum is simply dummy text of the printings and type and setting for content",
  },
  {
    img: IMAGES.treatment4,
    title: "Dental Implants",
    description:
      "Lorem Ipsum is simply dummy text of the printings and type and setting for content",
  },
  {
    img: IMAGES.treatment5,
    title: "Oral Surgery",
    description:
      "Lorem Ipsum is simply dummy text of the printings and type and setting for content",
  },
  {
    img: IMAGES.treatment6,
    title: "General Dentistry",
    description:
      "Lorem Ipsum is simply dummy text of the printings and type and setting for content",
  },
];

function Treatment() {
  return (
    <Section className={styles.treatmentSection}>
      <Section
        className={`${styles.treatmentContainer} globalWidth globalPadding`}
      >
        <h1 className={styles.treatMentHeading}>Treatments</h1>
        <TreatMentCards />
      </Section>
    </Section>
  );
}

function TreatMentCards() {
  return (
    <div className={styles.treatmentCards}>
      {TreatmentData.map((treat, index) => (
        <Card className={styles.treatMentCard} key={index}>
          <Image
            src={treat.img}
            alt="treatment-img"
            className={styles.treatmentCardImg}
          />
          <h1 className={styles.treatmentTitle}>{treat.title}</h1>
          <p className={styles.treatmentDesc}>{treat.description}</p>
          <Button className={styles.treatmentCardBtn}>Read More</Button>
        </Card>
      ))}
    </div>
  );
}

export default Treatment;
