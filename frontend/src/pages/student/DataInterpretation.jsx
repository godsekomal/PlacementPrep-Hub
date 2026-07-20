// src/pages/student/DataInterpretation.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./DataInterpretation.css";

export default function DataInterpretation() {

  const topics = [
    {
      title: "Bar Graph",
      desc:
        "Practice questions based on bar graphs, comparisons and data analysis.",
      path: "/bar-graph",
    },

    {
      title: "Pie Chart",
      desc:
        "Solve pie chart based aptitude questions with percentage calculations.",
      path: "/pie-chart",
    },

    {
      title: "Table DI",
      desc:
        "Improve data interpretation skills using table based questions.",
      path: "/table-di",
    },

    {
      title: "Line Graph",
      desc:
        "Practice line graph questions involving trends and comparisons.",
      path: "/line-graph",
    },

    
  ];

  return (
    <div className="di-page">

      {/* BREADCRUMB */}

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Data Interpretation</span>

      </div>

      {/* HERO */}

      <div className="di-hero">

        <h1>
          Data <span>Interpretation</span>
        </h1>

        <p>
          Data Interpretation helps students analyze charts, tables and graphs
          quickly. It improves logical thinking, calculation speed and decision
          making ability required in placement aptitude exams.
        </p>

      </div>

      {/* TOPICS */}

      <div className="topics-section">

        <h2>
          Data Interpretation Topics
        </h2>

        <div className="topics-grid">

          {topics.map((topic, index) => (

            <div className="topic-card" key={index}>

              <h3>{topic.title}</h3>

              <p>{topic.desc}</p>

              <Link to={topic.path} className="practice-link">

                <button className="start-btn">
                  Practice Now
                </button>

              </Link>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}