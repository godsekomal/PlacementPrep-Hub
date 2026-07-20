import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Capgemini.css";

export default function Capgemini() {
  const [activeTab, setActiveTab] = useState("Summary");

  const examPattern = [
    ["Round 1: Online Assessment", "Technical MCQs + Pseudocode", "40", "40-50 minutes"],
    ["Round 1: Online Assessment", "English / Communication Test", "30", "30 minutes"],
    ["Round 1: Online Assessment", "Game Based Cognitive Test", "4 Games", "20-30 minutes"],
    ["Round 1: Online Assessment", "Behavioral / Power Skills", "-", "20-25 minutes"],
    ["Round 2: Coding Round", "Coding Questions", "2", "45 minutes"],
    ["Round 3: Technical Interview", "Technical + Resume Discussion", "Q&A", "20-35 minutes"],
    ["Round 4: HR Interview", "Behavioral Assessment", "Q&A", "10-20 minutes"],
  ];

  const tabs = {
    Summary: [
      "Technical Test - 40 Questions, 40-50 minutes",
      "English Communication Test - 30 Questions, 30 minutes",
      "Game Based Cognitive Aptitude - 4 games, 20-30 minutes",
      "Behavioral Competency - Off Campus Drive",
      "Coding Round - 2 Questions, 45 minutes",
    ],

    "Technical Test": [
      "C",
      "C++",
      "OOPS",
      "Data Structures",
      "Pseudo Code",
      "SQL / DBMS",
      "Computer Networks",
      "Operating System",
    ],

    "English Communication Test": [
      "Sentence Correction",
      "Prepositions",
      "Grammar",
      "Reading Comprehension",
      "Synonyms & Antonyms",
      "Speech and Tenses",
      "Article",
      "Sentence Selection",
      "Spotting Error",
      "Sentence Arrangement",
    ],

    "Game Based Aptitude": [
      "Deductive Logical Thinking",
      "Inductive Logical Thinking",
      "Motion Challenge",
      "Switch Challenge",
      "Digit Challenge",
      "Grid Challenge",
    ],

    "Behavioral Competency": [
      "Psychometric Test",
      "Workplace Situations",
      "Decision Making",
      "Personality Based Questions",
      "No right or wrong answer",
    ],

    "Coding Test": [
      "C",
      "C++",
      "Java",
      "Python",
      "Total Coding Questions: 2",
      "Time Allotted: 45 minutes",
      "Difficulty: High",
    ],
  };

  return (
    <div className="capgemini-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>Capgemini Exceller Syllabus 2026</h1>

        <p>
          <b>Capgemini Exceller Syllabus and Test Pattern</b> has been updated
          for freshers. This page includes online assessment pattern, coding
          round, interview process and important syllabus sections.
        </p>
      </section>

      <section className="content-section">
        <h2>Capgemini Exceller Syllabus and Test Pattern</h2>

        <p>
          Capgemini Exceller recruitment process starts with an online
          assessment followed by coding, technical interview and HR interview.
          Students should prepare section-wise to clear each round confidently.
        </p>

        <p>
          The selection process includes technical test, English communication
          test, game based aptitude, behavioral competency, coding test and
          interviews.
        </p>
      </section>

      <section className="content-section">
        <h2>Capgemini Exceller Syllabus For 2026</h2>

        <ol className="highlight-list">
          <li>Technical Test</li>
          <li>English Communication Test</li>
          <li>Aptitude Test Game Based</li>
          <li>Coding</li>
          <li>Behavioral Competency Profiling</li>
          <li>Technical Interview</li>
          <li>HR Interview</li>
        </ol>

        <p className="note">
          Note: Capgemini may ask coding questions for different profiles where
          candidates need to solve 2 questions within 45 minutes.
        </p>
      </section>

      <section className="content-section">
        <h2>Capgemini Exceller Paper Pattern And Curriculum 2026</h2>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Round</th>
                <th>Section</th>
                <th>No. of Questions</th>
                <th>Time Allotted</th>
              </tr>
            </thead>

            <tbody>
              {examPattern.map((row, index) => (
                <tr key={index}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="red-note">
          NOTE: Number of rounds and timing may vary depending on college or
          university recruitment process.
        </p>
      </section>

      <section className="content-section syllabus-section">
        <h2>Capgemini Exceller Syllabus and Test Pattern 2026</h2>

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
          <h3>Capgemini Exceller {activeTab}</h3>

          {activeTab === "Behavioral Competency" && (
            <p>
              This section is also known as psychometric test. It checks your
              personality, workplace behavior and decision-making ability.
            </p>
          )}

          {activeTab === "Coding Test" && (
            <p>
              Coding test is generally for students who qualify previous rounds.
              Preferable languages are C, C++, Java and Python.
            </p>
          )}

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="note">
            Prepare this section carefully because Capgemini focuses on
            accuracy, consistency and conceptual understanding.
          </p>
        </div>
      </section>
    </div>
  );
}