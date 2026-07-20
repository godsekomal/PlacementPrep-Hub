import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Accenture.css";

export default function Accenture() {
  const [activeTab, setActiveTab] = useState("Technical");

  const basicInfo = [
    ["Behavioral Assessment", "54 Questions"],
    ["Cognitive Assessment (Gamified)", "3 Questions"],
    ["Technical Assessment (MCQs)", "45 Questions"],
    ["Coding Assessment", "3 Questions"],
    ["Communication Assessment", "20-25 Questions"],
  ];

  const examPattern = [
    ["1st Round", "Behavioral Assessment (Psychometric)", "54 Questions", "20 min"],
    ["1st Round", "Cognitive Assessment (Gamified)", "3 Questions", "20 min"],
    ["2nd Round", "Technical Assessment (MCQs)", "45 Questions", "45 min"],
    ["2nd Round", "Coding Assessment", "3 Questions", "60 min"],
    ["3rd Round", "Communication Assessment", "20 Questions approx.", "30 min"],
    ["Total", "All Sections", "125 Questions", "175 min"],
  ];

  const syllabus = {
    Technical: [
      "Fundamentals of Networking, Security and Cloud",
      "Common Applications and MS Office",
      "Pseudo Code",
      "Computer Fundamentals",
      "Basics of Database",
    ],

    Coding: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "HTML / CSS",
      ".NET",
    ],

    English: [
      "Sentence Correction",
      "Prepositions",
      "Grammar",
      "Reading Comprehension",
      "Synonyms and Antonyms",
      "Idioms and Phrases",
      "Spotting Error",
      "Sentence Arrangement",
    ],

    "Critical Reasoning": [
      "Arrangements",
      "Blood Relations",
      "Statement and Conclusions",
      "Coding Decoding",
      "Analogies",
      "Inferred Meaning",
      "Logical Sequence",
    ],

    "Abstract Reasoning": [
      "Visual Reasoning",
      "Flowcharts",
      "Direction Sense",
      "Seating Arrangement",
      "Pattern Recognition",
    ],
  };

  return (
    <div className="company-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>Accenture Syllabus 2026 For Freshers</h1>

        <p>
          <b>Accenture Syllabus for 2026</b> freshers can be found here on this
          page. This page includes Accenture recruitment process, exam pattern,
          syllabus, coding section and interview preparation details.
        </p>
      </section>

      <section className="content-section">
        <h2>Accenture Recruitment Highlights</h2>

        <ul className="highlight-list">
          <li>
            There will be <b>3 rounds</b> in the Accenture hiring test.
          </li>

          <li>
            The test is divided into <b>5 main sections</b> followed by an
            interview round.
          </li>

          <li>
            The initial sections consist of around <b>125 questions</b>.
          </li>

          <li>
            Total time duration is approximately <b>175 minutes</b>.
          </li>

          <li>
            The last section is the <b>Communication Assessment Test</b>.
          </li>

          <li>
            After clearing the online test, <b>Technical and HR Interview</b>{" "}
            will be conducted.
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Accenture Basic Information</h2>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Accenture</th>
                <th>Basic Information</th>
              </tr>
            </thead>

            <tbody>
              {basicInfo.map((row, index) => (
                <tr key={index}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section">
        <h2>Accenture Online Test Syllabus for 2026</h2>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Round</th>
                <th>Assessment</th>
                <th>No. of Questions</th>
                <th>Duration</th>
              </tr>
            </thead>

            <tbody>
              {examPattern.map((row, index) => (
                <tr key={index} className={row[0] === "Total" ? "total-row" : ""}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section">
        <h2>Important Information</h2>

        <ol className="important-list">
          <li>
            <b>Inter Sectional Navigation</b> is allowed.
          </li>
          <li>
            There is <b>no negative marking</b>.
          </li>
          <li>
            Each section of Accenture Online Test is an{" "}
            <b>Elimination Section</b>.
          </li>
          <li>
            The total time duration is <b>175 minutes</b>.
          </li>
          <li>
            Communication Assessment is included in the final hiring process.
          </li>
        </ol>
      </section>

      <section className="content-section syllabus-section">
        <h2>Accenture Complete Exam Syllabus 2026</h2>

        <div className="tabs">
          {Object.keys(syllabus).map((tab) => (
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
          <h3>Syllabus for Accenture {activeTab} section:</h3>

          {(activeTab === "English" ||
            activeTab === "Critical Reasoning" ||
            activeTab === "Abstract Reasoning") && (
            <p className="not-asked">Not Asked Anymore.</p>
          )}

          <p>
            This section includes important topics that students should revise
            while preparing for Accenture placement exam.
          </p>

          <ul>
            {syllabus[activeTab].map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>

          {activeTab === "Technical" && (
            <p className="note">
              If you are not able to clear the sectional cut-off of this round,
              you will not be able to attend the Coding Assessment Round.
            </p>
          )}

          {activeTab === "Coding" && (
            <p className="note">
              In the coding round, students can choose their preferred
              programming language and solve coding problems within the given
              time.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}