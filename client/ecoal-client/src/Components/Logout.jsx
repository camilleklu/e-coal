import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const Logout = ({ onLogout }) => {
    const [cookies, , removeCookie] = useCookies(["mycookie"]);

    const handleLogout = async () => {
        try {
            await axios.get("http://localhost:8000/api/logout", {
                headers: {
                    Authorization: `Bearer ${cookies.mycookie.token}`,
                },
            });

            removeCookie("mycookie", { path: "/" });

            onLogout();
        } catch (error) {
            console.error("Erreur lors de la déconnexion", error);
        }
    };

    return <button onClick={handleLogout}>Déconnexion</button>;
};

export default Logout;
