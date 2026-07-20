import React from "react";
import { Link } from "react-router-dom";
import "./CareerResource.css";

export default function InternshipPreparation() {
  return (
    <div className="career-resource-page">
      <Link to="/resources" className="back-link">← Back</Link>

      <div className="career-hero">
        <h1>Internship <span>Preparation</span></h1>
        <p>Prepare yourself for internship applications, interviews and project discussion.</p>
      </div>

      <div className="career-grid">
        <div className="career-card">
          <h2>Before Applying</h2>
          <p>Keep your resume ready.</p>
          <p>Update LinkedIn profile.</p>
          <p>Update GitHub portfolio.</p>
          <p>Prepare a short self introduction.</p>
        </div>

        <div className="career-card">
          <h2>Technical Preparation</h2>
          <p>Practice aptitude topics.</p>
          <p>Revise DSA basics.</p>
          <p>Prepare your project explanation.</p>
          <p>Revise programming fundamentals.</p>
        </div>

        <div className="career-card">
          <h2>Interview Preparation</h2>
          <p>Practice HR questions.</p>
          <p>Prepare technical questions.</p>
          <p>Explain internship interest clearly.</p>
          <p>Practice communication skills.</p>
        </div>

        <div className="career-card">
          <h2>Checklist</h2>
          <p>Resume</p>
          <p>LinkedIn</p>
          <p>GitHub</p>
          <p>Project Demo</p>
          <p>HR Preparation</p>
        </div>
      </div>
    </div>
  );
}