import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Search from "./Pages/Search";
import Article from "./Pages/Article";
import "antd/dist/reset.css";

import Register from "./Pages/Register";

import "./App.css"; // Importação do CSS

const App = () => {
    return (
        <div className="">
            <Navbar />
            <main className="w-full flex-grow p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/article/:id" element={<Article />} />
                    <Route path="*" element={<h4>Error 404</h4>} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
