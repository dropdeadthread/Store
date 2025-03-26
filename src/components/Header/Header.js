import React from "react";
import { Link } from "gatsby";
import * as styles from "./header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Drop Dead Thread Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/size-guide">Size Guide</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
