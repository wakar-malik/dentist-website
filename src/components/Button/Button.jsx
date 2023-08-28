import styles from "./Button.module.css";

function Button(props) {
  const classes = `${props.className || ""} ${styles.button}`;
  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
