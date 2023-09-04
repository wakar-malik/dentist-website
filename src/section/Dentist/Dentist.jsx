import Card from "../../components/Card/Card";
import Section from "../../components/Section/Section";
import styles from "./Dentist.module.css";
import IMAGES from "../../constants/Images";
import Image from "../../components/Image/Image";
import Button from "../../components/Button/Button";
import {
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const DentistData = [
  { img: IMAGES.dentist1, name: "Darry Milin", profession: "Oral Surgeon" },
  { img: IMAGES.dentist2, name: "Salman Ahmed", profession: "Oral Surgeon" },
  { img: IMAGES.dentist1, name: "Santa Binte", profession: "Oral Surgeon" },
];

function Dentist() {
  return (
    <Section className={`${styles.dentistSection} globalPadding`}>
      <h1 className={styles.dentistHeading}>Our Dentists</h1>
      <DentistCard dentistData={DentistData} />

      <Button className={styles.dentistBtn}>View all Dentists</Button>
    </Section>
  );
}

function DentistCard({ dentistData }) {
  return (
    <div className={`${styles.dentistCards} globalWidth`}>
      {dentistData.map((card, index) => (
        <Card className={styles.dentistCard} key={index}>
          {/* <div className={styles.dentistCardImgContainer}> */}
          <Image
            src={card.img}
            alt="dentist-img"
            className={styles.dentistCardImg}
          />
          {/* </div> */}

          <h1 className={styles.dentistCardName}>{card.name}</h1>
          <p className={styles.dentistCardProfession}>{card.name}</p>

          <div className={styles.divider}></div>

          <div className={styles.dentistCardSocialIcons}>
            <Button className={styles.dentistCardSocialIconContainer}>
              <FaFacebookF className={styles.dentistCardSocialIcon} />
            </Button>

            <Button className={styles.dentistCardSocialIconContainer}>
              <FaTwitter className={styles.dentistCardSocialIcon} />
            </Button>

            <Button className={styles.dentistCardSocialIconContainer}>
              <FaWhatsapp className={styles.dentistCardSocialIcon} />
            </Button>

            <Button className={styles.dentistCardSocialIconContainer}>
              <FaLinkedinIn className={styles.dentistCardSocialIcon} />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Dentist;
