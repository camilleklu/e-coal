import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [, setCookie] = useCookies(["mycookie"]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "123456") {
            setCookie(
                "mycookie",
                { token: "admin-token", role: "admin" },
                { path: "/" }
            );
            navigate("/admin");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8000/api/login",
                { email, password }
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
            console.error("Erreur lors de la connexion", error);
        }
    };

    return (
        <div>
            <h1>Connexion</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Se connecter</button>
            </form>
            <p>
                Pas de compte ? <Link to="/register">Créer un compte</Link>
            </p>
        </div>
    );
};

export default Login;
