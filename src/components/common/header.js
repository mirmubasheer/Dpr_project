import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './header.module.css'; // Adjust the path as per your project structure

function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>My Logo</div>
      <nav className={Styles.navLinks}>
        <NavLink exact to="/" activeClassName={Styles.active}>
          Home
        </NavLink>
        <NavLink to="/about" activeClassName={Styles.active}>
          About
        </NavLink>
        <NavLink to="/contact" activeClassName={Styles.active}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
