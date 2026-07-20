import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import "./Auth.css";

import logo from "../assets/logo.png";
import authBg from "../assets/home-bg.mp4";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post("/api/auth/register", {
        ...formData,
        role: "student",
      });

      alert("Signup Successful!");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup Failed");
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

      <div className="auth-left-text">
        <h1>
          Prepare Smarter for
          <br />
          Success.
        </h1>

        <p>
          AI powered preparation with reports, feedback and company
          specific practice
        </p>
      </div>

      <div className="auth-form-panel">
        <div className="auth-card">
          <h1>Create Account</h1>

          <p className="auth-subtitle">
            Join PlacementPrep Hub and start your placement preparation journey.
          </p>

          <form onSubmit={handleRegister}>
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

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
                placeholder="Enter your  Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="auth-btn">
              Create account
            </button>
          </form>

          <p className="auth-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}