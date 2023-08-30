import Section from "../../components/Section/Section";
import styles from "./Copyright.module.css";

function Copyright() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Section className={styles.copyrightSection}>
      <p className={styles.copyrightText}>
        © Copyright by Modina Theme -
        <span className={styles.copyrightYear}> {year}</span>
      </p>
    </Section>
  );
}

export default Copyright;
