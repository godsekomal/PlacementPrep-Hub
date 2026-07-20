// src/pages/student/QuantitativeAptitude.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./QuantitativeAptitude.css";

export default function QuantitativeAptitude() {

  const topics = [
    {
      title: "Percentage",
      link: "/percentage",
    },

    {
      title: "Profit and Loss",
      link: "/profit-loss",
    },

    {
      title: "Average",
      link: "/average",
    },

    {
      title: "Time and Work",
      link: "/time-work",
    },

    {
      title: "Time, Speed and Distance",
      link: "/time-speed-distance",
    },

    {
      title: "Ratio and Proportion",
      link: "/ratio-proportion",
    },

    {
      title: "Simple Interest",
      link: "/simple-interest",
    },

    {
      title: "Compound Interest",
      link: "/compound-interest",
    },

    {
      title: "Permutation and Combination",
      link: "/permutation-combination",
    },

    {
      title: "Probability",
      link: "/probability",
    },

    {
      title: "Number System",
      link: "/number-system",
    },

    {
      title: "HCF and LCM",
      link: "/hcf-lcm",
    },
  ];

  return (
    <div className="quant-page">

      {/* BREADCRUMB */}

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Quantitative Aptitude</span>

      </div>

      {/* HERO */}

      <div className="quant-hero">

        <h1>
          Quantitative <span>Aptitude</span>
        </h1>

        <p>
          Quantitative aptitude helps students improve numerical ability,
          problem-solving skills, and analytical thinking required for placement
          exams. Strong understanding of formulas, shortcuts, calculations and
          regular practice can help you solve questions faster and improve
          accuracy during aptitude tests.
        </p>

      </div>

      {/* TOPICS */}

      <div className="topics-section">

        <h2>
          Quantitative Aptitude Topics
        </h2>

        <div className="topics-grid">

          {topics.map((topic, index) => (

            <div className="topic-card" key={index}>

              <h3>{topic.title}</h3>

              <Link
                to={topic.link}
                className="practice-link"
              >
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