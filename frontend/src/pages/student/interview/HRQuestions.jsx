import React from "react";
import { Link } from "react-router-dom";
import "./InterviewResource.css";

export default function HRQuestions() {
  return (
    <div className="interview-resource-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="interview-hero">
        <h1>
          HR <span>Questions</span>
        </h1>

        <p>
          Common HR interview questions for freshers with simple preparation
          points.
        </p>
      </div>

      <div className="interview-grid">
        <div className="interview-card">
          <h2>Common HR Questions</h2>
          <p>Tell me about yourself.</p>
          <p>What are your strengths?</p>
          <p>What are your weaknesses?</p>
          <p>Why should we hire you?</p>
          <p>Where do you see yourself in 5 years?</p>
        </div>

        <div className="interview-card">
          <h2>Personal Questions</h2>
          <p>Tell us about your family background.</p>
          <p>What motivates you?</p>
          <p>What is your biggest achievement?</p>
          <p>How do you handle failure?</p>
          <p>Are you comfortable with relocation?</p>
        </div>

        <div className="interview-card">
          <h2>Academic Questions</h2>
          <p>Why did you choose this branch?</p>
          <p>What is your favorite subject?</p>
          <p>Explain your final year project.</p>
          <p>What did you learn from your internship?</p>
          <p>How do you manage time during exams?</p>
        </div>

        <div className="interview-card">
          <h2>Preparation Tips</h2>
          <p>Keep answers short, clear and confident.</p>
          <p>Use real examples from projects or internship.</p>
          <p>Do not memorize answers word-to-word.</p>
          <p>Maintain eye contact and positive body language.</p>
          <p>Prepare your self-introduction properly.</p>
        </div>
      </div>
    </div>
  );
}