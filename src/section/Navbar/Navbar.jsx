/* eslint-disable react/prop-types */
import IMAGES from "../../constants/Images";
import Image from "../../components/Image/Image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navItems = ["Home", "About", "Services", "Dentist", "Blog", "Contact"];

  return (
    <nav className={styles.navContainer}>
      <Logo imgSrc={IMAGES.logo} />
      <NavItems navItems={navItems} />
    </nav>
  );
};

const Logo = (props) => {
  return (
    <div className={styles.logoContainer}>
      <Image src={props.imgSrc} alt="logo-img" className={styles.logoImg} />
    </div>
  );
};

const NavItems = (props) => {
  return (
    <ul className={styles.navItemsContainer}>
      {props.navItems.map((item, index) => (
        <li key={index} className={styles.navItem}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
