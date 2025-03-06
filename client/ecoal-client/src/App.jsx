import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useCookies } from "react-cookie";
import axios from "axios";

import Navbar from "./Components/Navbar";
// import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Search from "./Pages/Search";
import Articles from "./Pages/Articles";
import Article from "./Pages/Article";
import "antd/dist/reset.css";

import Register from "./Pages/Register";

import "./App.css"; // Importação do CSS

const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["mycookie"]);
    const [isAuthenticated, setIsAuthenticated] = useState(!!cookies.mycookie);

    const handleLogin = (token, name) => {
        setCookie("mycookie", { name, token }, { path: "/" });
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        removeCookie("mycookie", { path: "/" });
        setIsAuthenticated(false);
    };
    return (
        <div className="">
            <Navbar />
            <main className="">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/login"
                        element={<Login setCookie={handleLogin} />}
                    />
                    <Route path="/register" element={<Register />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/articles/:id" element={<Article />} />
                    {/* <Route path="/admin" element={<Admin />} /> */}

                    <Route path="*" element={<h4>Error 404</h4>} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
