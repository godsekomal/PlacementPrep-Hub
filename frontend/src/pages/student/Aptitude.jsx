// src/pages/student/Aptitude.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Aptitude.css";

export default function Aptitude() {

  const aptitudeTopics = [
    {
      title: "Quantitative Aptitude",
      desc:
        "Practice arithmetic, percentages, profit & loss, averages, time & work and more.",
      path: "/quantitative-aptitude",
    },

    {
      title: "Data Interpretation",
      desc:
        "Improve analytical thinking with graphs, pie charts, tables and data analysis questions.",
      path: "/data-interpretation",
    },

    {
      title: "Logical Reasoning",
      desc:
        "Enhance problem-solving skills using puzzles, coding-decoding and seating arrangement.",
      path: "/logical-reasoning",
    },

    {
      title: "Verbal Reasoning",
      desc:
        "Practice statements, assumptions, conclusions and improve reasoning ability.",
      path: "/verbal-reasoning",
    },

    {
      title: "Verbal Ability",
      desc:
        "Master grammar, vocabulary, reading comprehension and sentence correction.",
      path: "/verbal-ability",
    },
  ];

  return (
    <div className="aptitude-page">

      {/* HOME LINK */}

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / Aptitude Practice</span>

      </div>

      {/* HERO SECTION */}

      <div className="aptitude-hero">

        <h1>
          Aptitude <span>Practice</span>
        </h1>

        <p>
          Prepare smarter with topic-wise aptitude practice and improve your
          placement performance with regular practice.
        </p>

      </div>

      {/* TOPICS GRID */}

      <div className="aptitude-grid">

        {aptitudeTopics.map((topic, index) => (

          <div className="aptitude-card" key={index}>

            <h2 className="topic-title">
              {topic.title}
            </h2>

            <p>
              {topic.desc}
            </p>

            <Link to={topic.path}>

              <button className="start-btn">
                Start Practice
              </button>

            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}