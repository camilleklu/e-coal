import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [, setCookie] = useCookies(["mycookie"]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8000/api/login",
                {
                    email,
                    password,
                }
            );

            setCookie(
                "mycookie",
                {
                    token: response.data.access_token,
                    user: response.data.user,
                },
                { path: "/" }
            );

            navigate("/");
        } catch (error) {
            setError("Identifiants incorrects. Veuillez réessayer.");
            console.error("Login failed", error);
        }
    };

    return (
        <div>
            <section className={styles.top}>
                <div className={styles.red_text}>
                    <p>Issue nº143</p>
                    <p>March 4, 2025</p>
                </div>
                <hr className={styles.line_separation_1}></hr>
                <hr className={styles.line_separation}></hr>
                <h2 className={styles.title}>Login</h2>
                <hr className={styles.line_separation}></hr>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className={styles.place_form}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.paire}>
                            <label>Mail</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.paire}>
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Connexion</button>
                    </form>
                </div>
                <p className={styles.text}>
                    Don't have an account?{" "}
                    <Link to="/register" className={styles.texte_red}>
                        Create one
                    </Link>
                </p>
                <hr className={styles.line_separation_bottom}></hr>
            </section>
        </div>
    );
};

export default Login;
