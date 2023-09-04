/* eslint-disable react/prop-types */
import IMAGES from "../../constants/Images";
import Image from "../../components/Image/Image";
import styles from "./Navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const navItems = ["Home", "About", "Services", "Dentist", "Blog", "Contact"];

  const handleNavbar = function () {
    setNavActive((prev) => !prev);
  };

  return (
    <nav className={`${styles.navContainer} globalWidth`}>
      <Logo imgSrc={IMAGES.logo} />
      <NavItems navItems={navItems} navActive={navActive} />
      <AiOutlineMenu onClick={handleNavbar} className={styles.navbarMenuIcon} />
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

const NavItems = ({ navItems, navActive }) => {
  return (
    <ul
      className={
        navActive ? styles.navItemsContainer : styles.navItemsContainerActive
      }
    >
      {navItems.map((item, index) => (
        <li key={index} className={styles.navItem}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
