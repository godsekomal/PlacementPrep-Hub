import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Companies.css";

const companies = [
  "Accenture",
  "DXC",
  "CapGemini",
  "Cognizant",
  "CGI",
  "HCL",
  "HSBC",
  "IBM",
  "Infosys",
  "L&T Infotech",
  "MindTree",
  "Mahindra ComViva",
  "Oracle",
  "Qualcomm",
  "TCS",
];

export default function Companies() {
  const navigate = useNavigate();
  return (
    <div className="companies-page">
      <button
    className="simple-back"
    onClick={() => navigate("/")}
  >
    ← Back
  </button>
      <div className="companies-header">
        <h1>Company Specific Preparation</h1>
        <p>
          Select a company and prepare with aptitude, coding, interview
          questions, selection process and placement resources.
        </p>
      </div>

      <div className="companies-grid">
        {companies.map((company, index) => (
          <Link
            key={index}
            to={`/company/${company.toLowerCase().replace(/\s+/g, "-")}`}
            className="company-card"
          >
            <div className="company-logo">
              {company.charAt(0)}
            </div>

            <span>{company}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}