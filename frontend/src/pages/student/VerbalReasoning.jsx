// src/pages/student/VerbalReasoning.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./VerbalReasoning.css";

export default function VerbalReasoning() {

  const topics = [
    "Statement and Conclusion",
    "Statement and Assumption",
    "Cause and Effect",
    "Assertion and Reason",
    "Logical Sequence",
  ];

  return (
    <div className="verbal-page">

      {/* BREADCRUMB */}

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Verbal Reasoning</span>

      </div>

      {/* HERO */}

      <div className="verbal-hero">

        <h1>
          Verbal <span>Reasoning</span>
        </h1>

        <p>
          Verbal Reasoning helps students improve logical thinking,
          decision-making and analytical ability through statements,
          assumptions, conclusions and reasoning-based questions asked in
          placement aptitude exams.
        </p>

      </div>

      {/* TOPICS */}

      <div className="topics-section">

        <h2>
          Verbal Reasoning Topics
        </h2>

        <div className="topics-grid">

          {topics.map((topic, index) => (

            <div className="topic-card" key={index}>

              <h3>{topic}</h3>

              {/* BUTTON LINKS */}

              {topic === "Statement and Conclusion" && (
                <Link to="/statement-conclusion">
                  <button className="start-btn">
                    Practice Now
                  </button>
                </Link>
              )}

              {topic === "Statement and Assumption" && (
                <Link to="/statement-assumption">
                  <button className="start-btn">
                    Practice Now
                  </button>
                </Link>
              )}

              {topic === "Cause and Effect" && (
                <Link to="/cause-effect">
                  <button className="start-btn">
                    Practice Now
                  </button>
                </Link>
              )}

              

              {topic === "Assertion and Reason" && (
                <Link to="/assertion-reason">
                  <button className="start-btn">
                    Practice Now
                  </button>
                </Link>
              )}

              {topic === "Logical Sequence" && (
                <Link to="/logical-sequence">
                  <button className="start-btn">
                    Practice Now
                  </button>
                </Link>
              )}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}