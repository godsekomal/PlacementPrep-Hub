import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StudentDashboard.css";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Komal",
    year: "Final Year",
    branch: "AI & DS",
    college: "PVGCOE Nashik",
  };

  const searchItems = {
    aptitude: "/student/aptitude",
    mock: "/mock-interviews",
    interview: "/mock-interviews",
    resume: "/resume-tips",
    roadmap: "/roadmap",
    report: "/weekly-reports",
    weekly: "/weekly-reports",
    company: "/companies",
    companies: "/companies",
    profile: "/student/profile",

    accenture: "/company/accenture",
    capgemini: "/company/capgemini",
    ibm: "/company/ibm",
    cognizant: "/company/cognizant",
    infosys: "/company/infosys",
    tcs: "/company/tcs",
    lti: "/company/lti",
    mindtree: "/company/mindtree",
    deloitte: "/company/deloitte",
    oracle: "/company/oracle",
    hcl: "/company/hcl",
    hsbc: "/company/hsbc",
    qualcomm: "/company/qualcomm",
    dxc: "/company/dxc",
    cgi: "/company/cgi",
    comviva: "/company/comviva",
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const query = searchText.toLowerCase().trim();

      if (searchItems[query]) {
        navigate(searchItems[query]);
      } else {
        alert("No result found!");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="student-dashboard">
      <aside className="student-sidebar">
        <h2>PlacementPrep</h2>

        <Link to="/student/dashboard" className="side-link active">
          Dashboard
        </Link>

        <Link to="/student/aptitude" className="side-link">
          Aptitude Practice
        </Link>

        <Link to="/companies" className="side-link">
          Company Preparation
        </Link>

        <Link to="/mock-interviews" className="side-link">
          AI Mock Interview
        </Link>

        <Link to="/resume-tips" className="side-link">
          Resume Tips
        </Link>

        <Link to="/roadmap" className="side-link">
          Placement Roadmap
        </Link>

        <Link to="/weekly-reports" className="side-link">
          Weekly Report
        </Link>

        <Link to="/student/profile" className="side-link">
  My Profile
</Link>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </aside>

      <main className="dashboard-main">
        <div className="topbar">
          <input
            type="text"
            placeholder="Search company, topic or resource..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearch}
          />

          <div className="profile-mini">
            <div className="profile-circle">
              {user.name?.charAt(0) || "K"}
            </div>

            <div>
              <h4>{user.name || "Komal"}</h4>
              <p>
                {user.year || "Final Year"} - {user.branch || "AI & DS"}
              </p>
            </div>
          </div>
        </div>

        <section className="welcome-banner">
          <div>
            <p className="date-text">{new Date().toDateString()}</p>

            <h1>Welcome back, {user.name || "Komal"}!</h1>

            <p>
              Continue your placement preparation journey with aptitude,
              company-specific resources, resume tips and mock interviews.
            </p>
          </div>

          <div className="banner-emoji">🎓</div>
        </section>

        <section className="quick-grid">
          <div className="dash-card">
            <h3>Aptitude Practice</h3>
            <p>Continue Quant, Logical and Verbal preparation.</p>
            <Link to="/student/aptitude">Start Practice</Link>
          </div>

          <div className="dash-card">
            <h3>Company Preparation</h3>
            <p>Prepare company-wise syllabus and exam patterns.</p>
            <Link to="/companies">Explore Companies</Link>
          </div>

          <div className="dash-card">
            <h3>AI Mock Interview</h3>
            <p>Practice HR and technical interview questions.</p>
            <Link to="/mock-interviews">Start Interview</Link>
          </div>

          <div className="dash-card">
            <h3>Resume Tips</h3>
            <p>Create ATS-friendly resume for placements.</p>
            <Link to="/resume-tips">Improve Resume</Link>
          </div>
        </section>

        <section className="dashboard-row">
          <div className="panel">
            <h2>Recently Viewed Companies</h2>

            <div className="company-list">
              <Link to="/company/infosys">Infosys</Link>
              <Link to="/company/tcs">TCS</Link>
              <Link to="/company/capgemini">Capgemini</Link>
              <Link to="/company/accenture">Accenture</Link>
            </div>
          </div>

          <div className="panel">
            <h2>Recommended For You</h2>

            <ul className="task-list">
              <li>Complete Probability topic</li>
              <li>Revise DBMS interview questions</li>
              <li>Attempt HR mock interview</li>
              <li>Review TCS preparation pattern</li>
            </ul>
          </div>
        </section>

        <section className="dashboard-row">
          <div className="panel">
            <h2>Placement Checklist</h2>

            <ul className="check-list">
              <li>✅ Profile Completed</li>
              <li>✅ Resume Updated</li>
              <li>✅ Aptitude Started</li>
              <li>☐ Mock Interview Completed</li>
              <li>☐ Placement Ready</li>
            </ul>
          </div>

          <div className="panel task-panel">
            <h2>Upcoming Preparation Tasks</h2>

            <ul className="task-list">
              <li>Practice 10 aptitude questions</li>
              <li>Revise DBMS interview questions</li>
              <li>Complete Infosys preparation</li>
              <li>Attempt one mock interview</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}