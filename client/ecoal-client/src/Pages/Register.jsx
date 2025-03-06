import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/register", {
                name,
                email,
                password,
            });
            navigate("/login");
        } catch (error) {
            console.error("Registration failed", error);
        }
    };

    return (
        <section className={styles.top}>
            <div className={styles.red_text}>
                <p>Issue nº143</p>
                <p>March 4, 2025</p>
            </div>
            <hr className={styles.line_separation_1}></hr>
            <hr className={styles.line_separation}></hr>
            <h2 className={styles.title}>Register</h2>
            <hr className={styles.line_separation}></hr>
            <div className={styles.place_form}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.paire}>
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.paire}>
                        <label>Mail</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.paire}>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="minimum 8 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
            <hr className={styles.line_separation_bottom}></hr>
        </section>
    );
};

export default Register;
