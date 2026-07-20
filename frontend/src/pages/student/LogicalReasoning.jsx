// src/pages/student/LogicalReasoning.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./LogicalReasoning.css";

export default function LogicalReasoning() {

  const topics = [
    "Coding Decoding",
    "Blood Relation",
    "Direction Sense",
    "Seating Arrangement",
    "Puzzle",
    "Syllogism",
  ];

  return (
    <div className="logical-page">

      {/* BREADCRUMB */}

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Logical Reasoning</span>

      </div>

      {/* HERO */}

      <div className="logical-hero">

        <h1>
          Logical <span>Reasoning</span>
        </h1>

        <p>
          Logical reasoning helps students improve analytical thinking,
          problem-solving ability and decision-making skills. Regular practice
          helps in solving puzzles, arrangements and logical questions faster
          in placement aptitude exams.
        </p>

      </div>

      {/* TOPICS */}

      <div className="topics-section">

        <h2>
          Logical Reasoning Topics
        </h2>

        <div className="topics-grid">

          {topics.map((topic, index) => (

            <div className="topic-card" key={index}>

              <h3>{topic}</h3>

              {/* CODING DECODING */}
              {topic === "Coding Decoding" && (

                <Link
                  to="/coding-decoding"
                  className="practice-link"
                >
                  <button className="start-btn">
                    Practice Now
                  </button>
                </Link>

              )}

              {/* BLOOD RELATION */}
              {topic === "Blood Relation" && (

                <Link
                  to="/blood-relation"
                  className="practice-link"
                >
                  <button className="start-btn">
                    Practice Now
                  </button>
                </Link>

              )}

              {/* DIRECTION SENSE */}
              {topic === "Direction Sense" && (

                <Link
                  to="/direction-sense"
                  className="practice-link"
                >
                  <button className="start-btn">
                    Practice Now
                  </button>
                </Link>

              )}

              {/* SEATING ARRANGEMENT */}
              {topic === "Seating Arrangement" && (

                <Link
                  to="/seating-arrangement"
                  className="practice-link"
                >
                  <button className="start-btn">
                    Practice Now
                  </button>
                </Link>

              )}

              {/* PUZZLE */}
              {topic === "Puzzle" && (

                <Link
                  to="/puzzle"
                  className="practice-link"
                >
                  <button className="start-btn">
                    Practice Now
                  </button>
                </Link>

              )}

              {/* SYLLOGISM */}
              {topic === "Syllogism" && (

                <Link
                  to="/syllogism"
                  className="practice-link"
                >
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