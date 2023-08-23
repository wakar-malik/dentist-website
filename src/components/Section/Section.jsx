import styles from "./Section.module.css";

function Section(props) {
  return <section className={props.className}>{props.children}</section>;
}

export default Section;
