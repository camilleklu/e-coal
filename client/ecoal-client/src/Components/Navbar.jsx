import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 bg-gray-900 flex justify-between items-center relative">
      <h1 className="text-primary text-2xl font-bold">K-Music Insider</h1>

      <button onClick={() => setMenuOpen(!menuOpen)} className="text-white md:hidden">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`absolute top-12 right-4 bg-gray-800 p-4 rounded-lg shadow-lg md:static md:flex md:bg-transparent ${menuOpen ? "block" : "hidden"}`}>
        <Link to="/search" className="block text-white mx-3 mb-2 md:inline">Search</Link>
        <Link to="/login" className="block text-white mx-3 mb-2 md:inline">Login</Link>
        <Link to="/register" className="block text-white mx-3 md:inline">Registar</Link>
      </div>
    </nav>
  );
};

export default Navbar;