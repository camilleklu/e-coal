import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Ícones do menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md py-4 border-b border-black relative flex items-center px-4">
      {/* Título do site à frente do menu */}
      <h1 className="text-2xl font-bold italic flex-grow text-left tracking-wide">
        K-Music Insider
      </h1>
      
      {/* Botão do menu */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-black ml-3">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      
      {/* Menu lateral quando aberto */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white text-center shadow-lg py-6 border-t border-black z-10">
          <ul className="space-y-5 text-xl font-bold italic">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/articles" className="hover:underline">Articles</Link></li>
            <li><Link to="/search" className="hover:underline">Search</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;