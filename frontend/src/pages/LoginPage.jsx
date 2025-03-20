import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Import the CSS file

const LoginPage = ({ setToken }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", form);
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.error === "User not found") {
        alert("User not found. Redirecting to signup page...");
        navigate("/signup");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;