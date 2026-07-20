import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Infosys.css";

export default function Infosys() {
  const [activeTab, setActiveTab] = useState("Technical Ability");

  const examPattern = [
    ["Logical Ability", "25 mins", "15 Questions"],
    ["Technical Ability", "35 mins", "10 Questions"],
    ["Verbal Ability", "20 mins", "20 Questions"],
    ["Pseudo Code", "10 mins", "5 Questions"],
    ["Puzzle Solving", "10 mins", "4 Questions"],
    ["English Grammar", "10 mins", "5 Questions"],
    ["English Writing", "10 mins", "1 Question"],
    ["Total", "120 mins", "60 Questions"],
  ];

  const tabs = {
    "Technical Ability": [
      "Percentages",
      "Data Interpretation",
      "Permutation and Combination",
      "Probability",
      "Areas, Shapes and Perimeter",
      "Speed Time and Distance",
      "Time and Work",
      "Profit and Loss",
      "Problem on Ages",
      "Divisibility",
      "Number Decimal and Fractions",
      "Series and Progression",
      "LCM and HCF",
    ],

    "Logical Ability": [
      "Arrangements",
      "Puzzles",
      "Syllogisms",
      "Coding-Decoding",
      "Number Series",
      "Cryptarithmetic",
      "Clocks and Calendar",
      "Data Sufficiency",
      "Most Logical Choice",
      "Logical Deduction",
    ],

    "Verbal Ability": [
      "Reading Comprehension",
      "Sentence Correction",
      "Sentence Selection",
      "Sentence Completion",
      "Para Jumbles",
      "Spotting Error",
      "Analogy",
      "Fill in the Blanks",
      "One Word Substitution",
    ],

    "Pseudo Code": [
      "C",
      "C++",
      "Data Structures",
      "Basic Programming Logic",
      "Loops and Conditions",
    ],

    Puzzle: [
      "Numerical Puzzle",
      "Logical Puzzle",
      "Pattern Based Puzzle",
      "Problem Solving Puzzle",
    ],

    "English Grammar": [
      "Grammar Rules",
      "Sentence Formation",
      "Error Detection",
      "Articles",
      "Tenses",
    ],

    "English Writing Test": [
      "Essay Writing",
      "Email Writing",
      "Paragraph Writing",
      "Clear Grammar and Structure",
      "Professional Writing Skills",
    ],
  };

  return (
    <div className="infosys-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>Infosys Syllabus and Online Test Pattern 2026</h1>

        <p>
          <b>Infosys Syllabus and Test Pattern</b> for 2026 includes technical
          ability, reasoning ability, verbal ability, pseudo code, puzzle
          solving, English grammar and English writing sections.
        </p>
      </section>

      <section className="content-section">
        <h2>Infosys Syllabus and Test Pattern Details</h2>

        <p>
          Infosys has updated its syllabus for both on-campus and off-campus
          recruitment. The Infosys written test is considered important, so
          proper section-wise preparation is required.
        </p>

        <p>
          Below is the detailed Infosys exam pattern to help you plan your
          preparation.
        </p>

        <h3>Infosys Aptitude Test Syllabus</h3>

        <p>
          <b>
            Logical Reasoning is considered one of the important sections in the
            Infosys written test pattern.
          </b>
        </p>

        <p>There are 7 sections in Infosys Online Test Paper:</p>

        <ul className="highlight-list">
          <li>Technical Ability</li>
          <li>Reasoning Ability</li>
          <li>Verbal Ability</li>
          <li>Pseudo Code</li>
          <li>Puzzle Solving</li>
          <li>English Grammar</li>
          <li>English Writing</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Infosys Online Test Pattern 2026</h2>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Topic Name</th>
                <th>Time</th>
                <th>Questions</th>
              </tr>
            </thead>

            <tbody>
              {examPattern.map((row, index) => (
                <tr key={index} className={row[0] === "Total" ? "total-row" : ""}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="note">
          On-campus hiring pattern may change from time to time. Students should
          regularly check official communication and registered email inbox.
        </p>
      </section>

      <section className="content-section syllabus-section">
        <h2>Infosys Syllabus Details</h2>

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
          <h3>Infosys {activeTab} Syllabus</h3>

          {activeTab === "Technical Ability" && (
            <p>
              Here are the Infosys quantitative aptitude and technical ability
              topics asked in online test.
            </p>
          )}

          {activeTab === "Logical Ability" && (
            <p>
              Below are the topics asked in Infosys logical and analytical
              reasoning section.
            </p>
          )}

          {activeTab === "Verbal Ability" && (
            <p>
              These are the English topics from which questions are generally
              asked in Infosys verbal test.
            </p>
          )}

          {activeTab === "Pseudo Code" && (
            <p>
              Pseudo code is one of the important sections to clear the Infosys
              online test.
            </p>
          )}

          {activeTab === "Puzzle" && (
            <p>
              Numerical puzzle section checks problem-solving and logical
              thinking ability.
            </p>
          )}

          {activeTab === "English Grammar" && (
            <p>
              English Grammar section checks sentence structure, grammar rules
              and language accuracy.
            </p>
          )}

          {activeTab === "English Writing Test" && (
            <p>
              English Writing Test checks writing clarity, grammar and
              professional communication skills.
            </p>
          )}

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="note">
            Practice this section regularly to improve speed, accuracy and
            confidence for Infosys placement exam.
          </p>
        </div>
      </section>
    </div>
  );
}