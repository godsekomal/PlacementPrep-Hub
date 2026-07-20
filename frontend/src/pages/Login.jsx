import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import "./Auth.css";

import logo from "../assets/logo.png";
import authBg from "../assets/home-bg.mp4";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/api/auth/login", formData);

      const token = res.data.token;

      const userData = res.data.user || {
        name: res.data.name || "",
        email: res.data.email || formData.email,
        role: res.data.role || "",
      };

      const role = userData.role || res.data.role;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("user", JSON.stringify(userData));

      alert("Login Successful!");

      if (role === "student") {
        navigate("/student/dashboard");
      } else if (role === "recruiter") {
        navigate("/recruiter/dashboard");
      } else if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="auth-page">
      <video className="auth-bg-video" autoPlay loop muted playsInline>
        <source src={authBg} type="video/mp4" />
      </video>

      <div className="auth-logo">
        <img src={logo} alt="PlacementPrep Hub" />
      </div>

      <div className="auth-left-text login-left-text">
        <h1>
          AI Powered Mock
          <br />
          Interviews
          <br />
          Build Confidence
          <br />
          Daily.
        </h1>

        <p>
          Experience real interview environment with instant AI feedback
          and smart analysis.
        </p>
      </div>

      <div className="auth-form-panel">
        <div className="auth-card">
          <h1>Welcome Back</h1>

          <p className="auth-subtitle">
            Login to continue your placement preparation journey with
            <br />
            PlacementPrep Hub.
          </p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="auth-btn">
              Login
            </button>
          </form>

          <p className="auth-link">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}