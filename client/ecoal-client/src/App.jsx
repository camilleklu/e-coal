import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login"; 
import Search from "./Pages/Search";
import Article from "./Pages/Article";

import "./App.css"; // Importação do CSS

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-4 max-w-md mx-auto">
        <Navbar />
        <main className="w-full flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/article/:id" element={<Article />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;