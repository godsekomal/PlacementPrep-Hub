import React, { useState } from "react";

import "./Home.css";

// ✅ Import Images
import logo from "../assets/logo.png";
import landingImg from "../assets/landing.png";
import homeBg from "../assets/home-bg.mp4";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ CLICK DROPDOWN STATE
  const [activeDropdown, setActiveDropdown] = useState(null);
const navigate = useNavigate();

const [showAccessPopup, setShowAccessPopup] = useState(false);

const handleProtectedFeature = (path) => {
  const token = localStorage.getItem("token");

  if (!token) {
    setShowAccessPopup(true);
    return;
  }

  navigate(path);
};
  return (
    <div className="home">
      <video className="home-bg-video" autoPlay loop muted playsInline>
  <source src={homeBg} type="video/mp4" />
</video>
      {/* Navbar */}
      <nav className="navbar">
        {/* ✅ LOGO IMAGE */}
        <div className="logo">
          <img src={logo} alt="PlacementPrep Hub Logo" className="logo-img" />
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          {/* ✅ FEATURES */}
          <li className="dropdown">
            <span
              className="nav-item"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "features" ? null : "features"
                )
              }
            >
              Features
            </span>

            {activeDropdown === "features" && (
              <div className="dropdown-menu">
                <button
  className="dropdown-link dropdown-btn"
  onClick={() => handleProtectedFeature("/student/aptitude")}
>
  Aptitude Practice
</button>
<button
  className="dropdown-link dropdown-btn"
  onClick={() => handleProtectedFeature("/mock-interviews")}
>
  Mock Interviews
</button>

     <button
  className="dropdown-link dropdown-btn"
  onClick={() => handleProtectedFeature("/ai-feedback")}
>
  AI Feedback
</button>

                <Link to="/weekly-reports" className="dropdown-link">
                  Weekly Reports
                </Link>
                
              </div>
            )}
          </li>

          {/* ✅ EXPLORE */}
          <li className="dropdown">
            <span
              className="nav-item"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "explore" ? null : "explore"
                )
              }
            >
              Explore
            </span>

            {activeDropdown === "explore" && (
              <div className="dropdown-menu">
                <Link to="/resources" className="dropdown-link">
                  Placement Resources
                </Link>

               

                <Link to="/resume-tips" className="dropdown-link">
                  Resume Builder Tips
                </Link>

                <Link to="/roadmap" className="dropdown-link">
                  Placement Roadmap
                </Link>
              </div>
            )}
          </li>

          {/* ✅ COMPANY SPECIFIC */}
          <li className="dropdown">
            <span
              className="nav-item"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "company" ? null : "company"
                )
              }
            >
              Company Specific
            </span>

            {activeDropdown === "company" && (
              <div className="dropdown-menu company-grid">
                <Link to="/company/accenture" className="dropdown-link">
                  Accenture
                </Link>

                <Link to="/company/Capgemini" className="dropdown-link">
                  Capgemini
                </Link>

                <Link to="/company/IBM" className="dropdown-link">
                  IBM
                </Link>

                <Link to="/company/Cognizant" className="dropdown-link">
                Cognizant                
                </Link>

                <Link to="/company/Infosys" className="dropdown-link">
                  Infosys
                </Link>

                <Link to="/company/TCS" className="dropdown-link">
                  TCS
                </Link>

                <Link to="/company/lti" className="dropdown-link">
                  L&T Infotect
                </Link>

                <Link to="/company/deloitte" className="dropdown-link">
                  Deloitte
                </Link>

                <Link to="/company/oracle" className="dropdown-link">
                  Oracle
                </Link>

                <Link to="/company/mindTree" className="dropdown-link">
                  MindTree
                </Link>

                <Link to="/company/comviva" className="dropdown-link">
                  Mahindra ComViva
                </Link>

                <Link to="/companies" className="dropdown-link view-all">
                  View All →
                </Link>
              </div>
            )}
          </li>

         {/* ✅ CONTACT */}
<li>
  <Link to="/contact" onClick={() => setMenuOpen(false)}>
    Contact
  </Link>
</li>
        </ul>

        {/* ✅ BUTTONS */}
        <div className="nav-buttons">
          <Link to="/login" className="btn-outline">
            Login
          </Link>

          <Link to="/register" className="btn-primary">
            Sign Up
          </Link>
        </div>

        {/* ✅ MOBILE MENU */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left fade-in">
          <p className="badge"> AI Powered Placement Preparation Platform</p>

          <h1>
            Prepare Smarter, Get Placed Faster
            <br />
            with <span className="highlight">PlacementPrep Hub</span>
          </h1>

          <p className="hero-desc">
            PlacementPrep Hub helps students practice aptitude tests, attempt
            mock interviews, and track weekly progress using smart reports and
            instant feedback.
          </p>

          {/* HERO STATS */}
          <div className="hero-stats">
            <div className="stat-box">
              <h3>100+</h3>
              <p>Questions</p>
            </div>

            <div className="stat-box">
              <h3>AI</h3>
              <p>Feedback</p>
            </div>

            <div className="stat-box">
              <h3>Weekly</h3>
              <p>Reports</p>
            </div>
          </div>
        </div>

        {/* HERO RIGHT IMAGE */}
        <div className="hero-right slide-up">
          <img
            src={landingImg}
            alt="Landing Dashboard"
            className="landing-img"
          />
        </div>

        {/* GLOW */}
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>
      </section>

      {/* FEATURES SECTION */}
      <section className="section" id="features">
        <h2 className="section-title">
          Powerful <span className="highlight">Features</span>
        </h2>

        <p className="section-subtitle">
          Everything you need for placement preparation in one platform.
        </p>

        <div className="features-grid">
          <div className="glass-card card">
            <h3>Aptitude Practice</h3>
            <p>
              Topic wise aptitude tests with score and time tracking for better
              improvement.
            </p>
          </div>

          <div className="glass-card card">
            <h3>Mock Interviews</h3>
            <p>
              Practice HR and technical interview questions with an AI based
              system.
            </p>
          </div>

          <div className="glass-card card">
            <h3>Smart Reports</h3>
            <p>
              Weekly performance report helps you analyze strengths and weak
              areas.
            </p>
          </div>

          <div className="glass-card card">
            <h3>Instant Feedback</h3>
            <p>
              Get feedback after every interview answer to improve your
              communication.
            </p>
          </div>
        </div>
      </section>

      {/* EXPLORE SECTION */}
      <section className="section" id="explore">
        <h2 className="section-title">
          Explore <span className="highlight">More</span>
        </h2>

        <p className="section-subtitle">
          Extra resources and company-specific preparation for your placements.
        </p>

        <div className="grid">
          <div className="glass-card card">
            <h3>Placement Resources</h3>
            <p>
              Get resume tips, interview guidance, and important placement
              preparation materials.
            </p>
          </div>

          <div className="glass-card card">
            <h3>Company Specific Prep</h3>
            <p>
              Prepare for companies like TCS, Infosys, Wipro, Accenture,
              Capgemini with pattern-based practice.
            </p>
          </div>

          <div className="glass-card card">
            <h3>Resume Builder Tips</h3>
            <p>
              Learn how to create ATS friendly resume and improve your profile
              for recruiters.
            </p>
          </div>

          <div className="glass-card card">
            <h3>Placement Roadmap</h3>
            <p>
              Follow step-by-step roadmap to prepare smarter and crack
              placement interviews easily.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="glass-card cta-card">
          <h2>
            Ready to boost your{" "}
            <span className="highlight">Placement Skills</span>?
          </h2>

          <p>
            Start practicing today and become confident for aptitude tests and
            interviews.
          </p>

          <Link to="/register" className="btn-primary big-btn">
            Get Started
          </Link>
        </div>
      </section>
{showAccessPopup && (
  <div className="access-overlay">

    <div className="access-popup">

      <button
        className="access-close"
        onClick={() => setShowAccessPopup(false)}
      >
        ×
      </button>

      <div className="lock-icon">🔒</div>

      <h2>Unlock Full Access</h2>

      <p>
        Login or create an account to access placement preparation features.
      </p>

      <Link to="/register" className="signup-continue">
        Signup to continue
      </Link>

      <p className="login-text">
        Already have an account?{" "}
        <Link to="/login">Log in</Link>
      </p>

    </div>

  </div>
)}
      {/* FOOTER */}
      <footer className="footer">
  <div className="footer-left">
    <a href="#">Terms & Support</a>
    <a href="#">Privacy Policy</a>
  </div>
</footer>
    </div>
  );
}