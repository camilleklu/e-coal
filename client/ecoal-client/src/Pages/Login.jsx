import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setCookie }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

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

            // Stockez le token ET le rôle de l'utilisateur dans le cookie
            setCookie(
                "mycookie",
                {
                    token: response.data.access_token,
                    role: response.data.user.role, // Assurez-vous que le backend renvoie le rôle
                },
                { path: "/" }
            );

            navigate("/");
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
