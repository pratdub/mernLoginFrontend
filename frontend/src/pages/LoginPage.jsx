import React, { useState } from "react";
import axios from "axios";

const LoginPage = ({ setToken }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/auth/login", form);
    setToken(res.data.token);
    localStorage.setItem("token", res.data.token);
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginPage;