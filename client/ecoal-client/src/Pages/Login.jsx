import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["mycookie"]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the credentials match the hardcoded admin
    if (email === "admin@gmail.com" && password === "123456") {
      // Set cookie for admin with a custom token and role
      setCookie("mycookie", { token: "admin-token", role: "admin" }, { path: "/" });
      navigate("/admin");
    } else {
      try {
        // Normal user login: make an API call to your backend
        const response = await axios.post("http://localhost:8000/api/login", {
          email,
          password,
        });
        // Store token and role from the API response
        setCookie(
          "mycookie",
          {
            token: response.data.access_token,
            role: response.data.user.role, // Ensure the backend returns the user's role
          },
          { path: "/" }
        );
        navigate("/"); // Redirect normal users to the homepage or desired page
      } catch (error) {
        console.error("Login failed", error);
        setError("Invalid credentials. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
