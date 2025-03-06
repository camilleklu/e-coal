import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import styles from "./Logout.module.css";

const Logout = ({ onLogout }) => {
    const [cookies, , removeCookie] = useCookies(["mycookie"]);

    const handleLogout = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8000/api/logout",
                {
                    headers: {
                        Authorization: `Bearer ${cookies.mycookie.token}`,
                    },
                }
            );
            removeCookie("mycookie", { path: "/" });
            onLogout();
        } catch (error) {
            console.error(
                "Erreur lors de la déconnexion",
                error.response?.data || error.message
            );
        }
    };

    return (
        <button onClick={handleLogout} className={styles.button_nav}>
            Déconnexion
        </button>
    );
};

export default Logout;
