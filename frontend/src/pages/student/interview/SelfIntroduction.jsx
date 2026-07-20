import React from "react";
import { Link } from "react-router-dom";
import "./InterviewResource.css";

export default function SelfIntroduction() {
  return (
    <div className="interview-resource-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="interview-hero">
        <h1>
          Self <span>Introduction</span>
        </h1>

        <p>
          Prepare a confident and professional self introduction for interviews.
        </p>
      </div>

      <div className="interview-grid">
        <div className="interview-card">
          <h2>Introduction Format</h2>
          <p>Start with your name and education.</p>
          <p>Mention your technical skills.</p>
          <p>Talk about your projects or internship.</p>
          <p>Add your strengths.</p>
          <p>End with your career goal.</p>
        </div>

        <div className="interview-card">
          <h2>Sample Self Introduction</h2>
          <p>
            Good morning. My name is Komal Godse. I am pursuing Engineering in
            Artificial Intelligence and Data Science. I have knowledge of Python,
            JavaScript, React, Machine Learning and Data Analysis.
          </p>
          <p>
            I have worked on projects like Smart Placement Hub and AI Attendance
            Prediction Model. My strengths are problem solving, teamwork and
            time management.
          </p>
          <p>
            My goal is to start my career in a reputed company where I can learn,
            contribute and grow professionally.
          </p>
        </div>

        <div className="interview-card">
          <h2>Important Tips</h2>
          <p>Keep your introduction between 60 to 90 seconds.</p>
          <p>Do not memorize word by word.</p>
          <p>Speak naturally and confidently.</p>
          <p>Highlight your project and skills.</p>
          <p>Avoid unnecessary personal details.</p>
        </div>

        <div className="interview-card">
          <h2>Common Mistakes</h2>
          <p>Speaking too fast.</p>
          <p>Giving very long answers.</p>
          <p>Not mentioning skills or projects.</p>
          <p>Using casual language.</p>
          <p>Sounding underconfident.</p>
        </div>
      </div>
    </div>
  );
}