import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useCookies } from "react-cookie";
import axios from "axios";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Search from "./Pages/Search";
import Articles from "./Pages/Articles";
import Article from "./Pages/Article";
import Register from "./Pages/Register";

const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["mycookie"]);
    const [isAuthenticated, setIsAuthenticated] = useState(!!cookies.mycookie);

    const handleLogin = (token, name) => {
        setCookie("mycookie", { name, token }, { path: "/" });
        setIsAuthenticated(true);
        navigate("/");
    };

    const handleLogout = async () => {
        try {
            await axios.get("http://localhost:8000/api/logout", {
                headers: {
                    Authorization: `Bearer ${cookies.mycookie.token}`,
                },
            });

            removeCookie("mycookie", { path: "/" });
            setIsAuthenticated(false);
            navigate("/");
        } catch (error) {
            console.error("Erreur lors de la déconnexion", error);
        }
    };

    return (
        <div className="">
            <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <main className="">
                <Routes>
                    <Route
                        path="/"
                        element={<Home isAuthenticated={isAuthenticated} />}
                    />
                    <Route
                        path="/login"
                        element={<Login setCookie={handleLogin} />}
                    />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/search"
                        element={<Search isAuthenticated={isAuthenticated} />}
                    />
                    <Route
                        path="/articles"
                        element={<Articles isAuthenticated={isAuthenticated} />}
                    />
                    <Route
                        path="/articles/:id"
                        element={
                            <Article
                                isAuthenticated={isAuthenticated}
                                cookies={cookies}
                            />
                        }
                    />
                    {/* <Route path="/admin" element={<Admin />} /> */}

                    <Route path="*" element={<h4>Error 404</h4>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
