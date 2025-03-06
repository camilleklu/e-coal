import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from './Navbar.module.css';
import 'boxicons';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <nav className={styles.navbar}>
      <div className={styles.navbar_logo_burger}>
      <div className="navbar-burger" onClick={toggleMenu}>
      <box-icon name='menu' className={styles.icon}></box-icon>
      </div>
      <h1 className={styles.logo}>K-Music Insider</h1>
      </div>
      <ul className={`${styles['navbar-list']} ${menuOpen ? styles.show : ''}`}> 
        <li className={styles['navbar-item']}><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li className={styles['navbar-item']}><Link to="/articles" onClick={toggleMenu}>Articles</Link></li>
        <li className={styles['navbar-item']}><Link to="/search" onClick={toggleMenu}>Search</Link></li>
        <li className={styles['navbar-item']}><Link to="/login" onClick={toggleMenu}>Login</Link></li>
        <li className={styles['navbar-item']}><Link to="/register" onClick={toggleMenu}>Register</Link></li>
      </ul>





      
    </nav >
  );
};

export default Navbar;