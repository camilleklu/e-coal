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
<<<<<<< HEAD
      
      {/* Menu lateral quando aberto */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white text-center shadow-lg py-6 border-t border-black z-10">
          <ul className="space-y-5 text-xl font-bold italic">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/articles" className="hover:underline">Articles</Link></li>
            <li><Link to="/search" className="hover:underline">Search</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/register" className="hover:underline">Register</Link></li>
          </ul>
        </nav>
      )}
    </header>
=======

      <div className={`absolute top-12 right-4 bg-gray-800 p-4 rounded-lg shadow-lg md:static md:flex md:bg-transparent ${menuOpen ? "block" : "hidden"}`}>
        <Link to="/search" className="block text-white mx-3 mb-2 md:inline">Search</Link>
        <Link to="/login" className="block text-white mx-3 mb-2 md:inline">Login</Link>
        <Link to="/register" className="block text-white mx-3 md:inline">Registar</Link>
      </div>
    </nav>
>>>>>>> dc11753657822228dc48d6a3959a87f7191098b9
  );
};

export default Navbar;