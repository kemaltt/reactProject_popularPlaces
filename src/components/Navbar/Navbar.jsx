import React from "react";
import styles from "../Navbar/Navbar.css";
import { NavbarContainer, List } from "../../Styles";

const Navbar = () => {
  const nawBar = ["ABOUT US", "FOR YOU", "SERVİCES", "BLOG", "VLOG", "CONTACT"];
  return (
    <NavbarContainer>
      {nawBar.map((el, i) => (
        <List key={i}>{el}</List>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;

// export { Navbar };
