import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Oracle.css";

export default function Oracle() {
  const [activeTab, setActiveTab] = useState("Aptitude Assessment");

  const examPattern = [
    ["Aptitude Assessment", "10 Questions", "Quantitative + Logical Reasoning"],
    ["Verbal Assessment", "10 Questions", "English Language Skills"],
    ["General Coding", "1 Question", "DSA Based Coding"],
    ["API Making Round", "1 Question", "API Design and Development"],
  ];

  const tabs = {
    "Aptitude Assessment": [
      "Percentages",
      "Ratio and Proportion",
      "Averages",
      "Time and Work",
      "Time, Speed and Distance",
      "Number System",
      "Puzzles",
      "Series Completion",
      "Coding-Decoding",
      "Logical Reasoning",
    ],

    "Verbal Assessment": [
      "Grammar",
      "Vocabulary",
      "Synonyms and Antonyms",
      "Reading Comprehension",
      "Error Identification",
      "Sentence Formation",
      "Fill in the Blanks",
    ],

    "General Coding": [
      "Arrays",
      "Strings",
      "Linked List",
      "Stacks and Queues",
      "Trees",
      "Graphs",
      "Sorting Algorithms",
      "Searching Algorithms",
      "Recursion",
      "Dynamic Programming",
    ],

    "API Making Round": [
      "REST API Concepts",
      "CRUD Operations",
      "JSON Handling",
      "Backend Integration",
      "API Request and Response",
      "Clean Code",
      "Secure API Design",
    ],
  };

  return (
    <div className="oracle-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>Oracle Syllabus for Fresh Graduates 2025</h1>

        <p>
          <b>Oracle Syllabus 2025</b> includes aptitude assessment, verbal
          assessment, general coding and API making round. This page provides
          the latest Oracle placement exam pattern and syllabus for fresh
          graduates.
        </p>
      </section>

      <section className="content-section">
        <h2>Oracle Placement Exam Syllabus 2025</h2>

        <p>
          Oracle is a leading multinational company in computer technology and
          software development. The Oracle placement exam checks problem-solving
          ability, communication skills, coding knowledge and API development
          understanding.
        </p>

        <p>
          The placement process is designed to assess candidates on multiple
          skills ranging from aptitude to coding and backend/API concepts.
        </p>

        <h3>Oracle Placement Exam Sections</h3>

        <ul className="highlight-list">
          <li>Aptitude Assessment</li>
          <li>Verbal Assessment</li>
          <li>General Coding</li>
          <li>API Making Round</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Oracle Exam Pattern 2025</h2>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Section Name</th>
                <th>No. of Questions</th>
                <th>Important Information</th>
              </tr>
            </thead>

            <tbody>
              {examPattern.map((row, index) => (
                <tr key={index}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section">
        <h2>Detail Pattern of Oracle Syllabus 2025</h2>

        <ol className="round-list">
          <li>
            <b>Aptitude Assessment</b>
            <p>
              This section evaluates mathematical ability and logical reasoning
              skills.
            </p>
          </li>

          <li>
            <b>Verbal Assessment</b>
            <p>
              This section checks English grammar, vocabulary and reading
              comprehension.
            </p>
          </li>

          <li>
            <b>General Coding</b>
            <p>
              This round tests knowledge of Data Structures and Algorithms.
            </p>
          </li>

          <li>
            <b>API Making Round</b>
            <p>
              This round checks API design, CRUD operations and backend
              development basics.
            </p>
          </li>
        </ol>
      </section>

      <section className="content-section important-box">
        <h2>Overall Difficulty of Oracle Test</h2>

        <p>
          Oracle placement exam is slightly more challenging compared to
          standard placement exams, especially in coding and API rounds. Strong
          DSA fundamentals and backend concepts are important for success.
        </p>
      </section>

      <section className="content-section syllabus-section">
        <h2>Oracle Detailed Syllabus 2025</h2>

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
          <h3>Oracle {activeTab} Syllabus</h3>

          {activeTab === "Aptitude Assessment" && (
            <p>
              Aptitude Assessment includes quantitative aptitude and logical
              reasoning topics.
            </p>
          )}

          {activeTab === "Verbal Assessment" && (
            <p>
              Verbal Assessment checks grammar, vocabulary and comprehension
              skills.
            </p>
          )}

          {activeTab === "General Coding" && (
            <p>
              General Coding focuses on Data Structures, Algorithms and
              problem-solving skills.
            </p>
          )}

          {activeTab === "API Making Round" && (
            <p>
              API Making Round tests your ability to design and develop
              functional APIs.
            </p>
          )}

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="note">
            Practice this section regularly to improve accuracy, coding logic
            and confidence for Oracle placement exam.
          </p>
        </div>
      </section>
    </div>
  );
}