import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cognizant.css";

export default function Cognizant() {
  const [activeTab, setActiveTab] = useState("Communication Assessment");

  const testPattern = [
    ["Round 1 - Communication Assessment", "60 Minutes"],
    ["Round 2 - Quants + Game Based Assessment", "80 Minutes"],
    ["Round 3 - Technical Assessment", "120 Minutes"],
    ["Negative Marking", "N / A"],
  ];

  const tabs = {
    "Communication Assessment": [
      "Mode: Online",
      "Total Time: 60 minutes",
      "Evaluation: AI based automated evaluation",
      "Reading and listening comprehension",
      "Speaking: voice recording, sentence narration and topic speaking",
      "Grammar: fill in the blanks, error correction and sentence formation",
    ],

    Quants: [
      "LCM and HCF",
      "Divisibility",
      "Numbers and decimal fractions",
      "Averages",
      "Ratio and Proportion",
      "Algebra",
      "Profit and Loss",
      "Simple and Compound Interest",
      "Time, Speed and Distance",
      "Time and Work",
      "Percentage",
      "Permutation and Combination",
      "Probability",
    ],

    "Game Based Aptitude": [
      "Deductive Logical Thinking",
      "Inductive Logical Thinking",
      "Grid Challenge",
      "Motion Challenge",
      "Switch Challenge",
      "Digit Challenge",
      "4 out of 24 games to attempt",
      "Time Allotted: 50 Minutes",
    ],

    Coding: [
      "Cluster 1: Java + Web - Java, SQL, HTML, CSS, JavaScript",
      "Cluster 2: Python + Cloud - Python, SQL, Cloud Fundamentals",
      "Cluster 3: C# + Web - C#, SQL, HTML, CSS, JavaScript",
      "Duration: 120 minutes",
      "Choose one technical cluster before starting the assessment",
    ],
  };

  return (
    <div className="cognizant-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>Cognizant GenC Syllabus 2025</h1>

        <p>
          <b>Cognizant GenC Hiring 2025</b> includes on-campus and off-campus
          recruitment drives for fresh graduates. This page covers the latest
          syllabus, online test pattern, communication round, aptitude, coding
          and interview process.
        </p>

        <p className="red-note">
          Note: Cognizant GenC exam is usually conducted through the Superset
          platform.
        </p>
      </section>

      <section className="content-section">
        <h2>Cognizant GenC Syllabus for Freshers 2025</h2>

        <p>
          To prepare effectively, students should understand the complete exam
          flow, number of rounds, section-wise time duration, difficulty level
          and topics covered in each section.
        </p>

        <ul className="highlight-list">
          <li>Number of rounds</li>
          <li>Section-wise time duration</li>
          <li>Topics covered in each section</li>
          <li>Difficulty level</li>
          <li>Updated exam pattern</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Cognizant GenC Online Test Syllabus 2025</h2>

        <ol className="round-list">
          <li>
            <b>Communication Assessment Round</b>
            <ul>
              <li>Reading</li>
              <li>Grammar and Comprehension</li>
              <li>Listening and Speaking</li>
            </ul>
          </li>

          <li>
            <b>Quants + Game Based Round</b>
            <ul>
              <li>Quantitative Aptitude</li>
              <li>Game Based Aptitude</li>
            </ul>
          </li>

          <li>
            <b>Technical Assessment Coding</b>
            <ul>
              <li>Coding 1</li>
              <li>Coding 2</li>
            </ul>
          </li>

          <li>
            <b>GenC Technical + HR Interview</b>
          </li>
        </ol>
      </section>

      <section className="content-section">
        <h2>Cognizant GenC Test Syllabus Rounds</h2>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Cognizant GenC Test Pattern</th>
                <th>Important Information</th>
              </tr>
            </thead>

            <tbody>
              {testPattern.map((row, index) => (
                <tr key={index}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="note-list">
          <li className="red-text">Communication Round is Elimination Round.</li>
          <li>These rounds may vary from zone to zone.</li>
        </ul>
      </section>

      <section className="content-section syllabus-section">
        <h2>Detailed Cognizant GenC Syllabus and Pattern 2025</h2>

        <div className="tabs">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active-tab" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <h3>Cognizant GenC {activeTab}</h3>

          {activeTab === "Communication Assessment" && (
            <p>
              Communication Assessment is the first and most important round. It
              checks English understanding, speaking ability, listening skills
              and grammar.
            </p>
          )}

          {activeTab === "Quants" && (
            <p>
              Cognizant GenC Quantitative Aptitude section includes basic
              mathematics, applied mathematics and engineering mathematics.
            </p>
          )}

          {activeTab === "Game Based Aptitude" && (
            <p>
              This round is designed to test decision-making ability,
              multitasking and logical thinking through game-based challenges.
            </p>
          )}

          {activeTab === "Coding" && (
            <p>
              Technical assessment is conducted offline at the test centre and
              candidates must choose one technical cluster before starting.
            </p>
          )}

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="note">
            Prepare this section carefully because Cognizant focuses on
            communication, accuracy, problem solving and technical basics.
          </p>
        </div>
      </section>
    </div>
  );
}