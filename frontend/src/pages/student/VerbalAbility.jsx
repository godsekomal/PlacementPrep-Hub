// src/pages/student/VerbalAbility.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./VerbalAbility.css";

export default function VerbalAbility() {

  const topics = [
    "Reading Comprehension",
    "Sentence Correction",
    "Synonyms and Antonyms",
    "Error Detection",
    "Fill in the Blanks",
    
  ];

  return (
    <div className="verbalability-page">

      {/* BREADCRUMB */}

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Verbal Ability</span>

      </div>

      {/* HERO */}

      <div className="verbalability-hero">

        <h1>
          Verbal <span>Ability</span>
        </h1>

        <p>
          Verbal Ability helps students improve grammar, vocabulary,
          comprehension and communication skills required for placement exams
          and interviews.
        </p>

      </div>

      {/* TOPICS */}

      <div className="topics-section">

        <h2>
          Verbal Ability Topics
        </h2>

        <div className="topics-grid">

          {topics.map((topic, index) => (

            <div className="topic-card" key={index}>

              <h3>{topic}</h3>

              {/* BUTTON LINKS */}

              {topic === "Reading Comprehension" && (
                <Link to="/reading-comprehension">
                  <button className="start-btn">
                    Practice Now
                  </button>
                </Link>
              )}

              {topic === "Sentence Correction" && (
                <Link to="/sentence-correction">
                  <button className="start-btn">
                    Practice Now
                  </button>
                </Link>
              )}

              {topic === "Synonyms and Antonyms" && (
                <Link to="/synonyms-antonyms">
                  <button className="start-btn">
                    Practice Now
                  </button>
                </Link>
              )}

              {topic === "Error Detection" && (
                <Link to="/error-detection">
                  <button className="start-btn">
                    Practice Now
                  </button>
                </Link>
              )}

              {topic === "Fill in the Blanks" && (
                <Link to="/fill-blanks">
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