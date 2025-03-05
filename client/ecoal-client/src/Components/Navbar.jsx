import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>

      <button onClick={() => setMenuOpen(!menuOpen)} className={styles.button}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={styles.contenue_bar}> 
        <Link to="/search" className="">Search</Link>
        <Link to="/login" className="">Login</Link>
        <Link to="/register" className="">Registar</Link>
      </div>

      <h1 className={styles.logo}>K-Music Insider</h1>



      
    </nav>
  );
};

export default Navbar;