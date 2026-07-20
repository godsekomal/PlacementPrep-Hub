import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LTI.css";

export default function LTI() {
  const [activeTab, setActiveTab] = useState("Quants");

  const examPattern = [
    ["Verbal Ability", "12 Questions", "15 mins"],
    ["Logical Ability", "12 Questions", "15 mins"],
    ["Numerical Ability", "12 Questions", "15 mins"],
    ["CMCQ", "20 Questions", "35 mins"],
    ["Pseudo Code", "20 Questions", "20 mins"],
    ["Automata Fix", "2 Questions", "40 mins"],
    ["Level 1: Spoken English Assessment", "N/A", "N/A"],
    ["Level 1: Coding Question Medium", "1 Question", "60 mins shared"],
    ["Level 2: Coding Question Difficulty", "1 Question", "60 mins shared"],
  ];

  const tabs = {
    Quants: [
      "Average",
      "Time and Work",
      "Profit and Loss",
      "Permutations and Combinations",
      "Number System and Divisibility",
      "Time, Speed and Distance",
      "Ratio and Proportion",
      "Mixture and Allegation",
      "Simple and Compound Interest",
      "Clocks and Calendar",
      "Probability",
      "Problem on Ages",
      "Mensuration",
    ],

    Verbal: [
      "Synonyms and Antonyms",
      "Contextual Vocabulary",
      "Error Identification",
      "Fill in the Blanks",
      "Reading Comprehension Ordering",
      "Number of Questions: 12",
      "Total Time: 15 mins",
    ],

    Logical: [
      "Distance and Directional Sense",
      "Coding Decoding",
      "Odd One Out",
      "Blood Relations",
      "Number Series",
      "Inferred Meaning",
      "Logical Word Sequence",
      "Data Sufficiency",
      "Number of Questions: 12",
      "Total Time: 15 mins",
    ],

    CMCQs: [
      "OOPs and Programming Basics",
      "Basics of SQL and PSQL",
      "Operating Systems",
      "Web Concepts and SDLC",
      "Number of Questions: 20",
      "Total Time: 35 mins",
    ],

    "Pseudo Code": [
      "Pseudo Code",
      "Programming Logic",
      "Loops and Conditions",
      "Arrays",
      "Functions",
      "Number of Questions: 20",
      "Total Time: 20 mins",
    ],

    "Automata Coding": [
      "C",
      "C++",
      "Java",
      "Python",
      "Total Questions: 2",
      "Total Time: 40 mins",
      "Difficulty: High",
      "Importance: High",
    ],
  };

  return (
    <div className="lti-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>L&T Infotech Syllabus 2025</h1>

        <p>
          <b>LTI Test Pattern</b> has changed recently. This page provides the
          updated LTI syllabus, recruitment rounds, exam pattern and detailed
          topic-wise preparation guide.
        </p>
      </section>

      <section className="content-section">
        <h2>LTI Syllabus Pattern 2025</h2>

        <p>
          LTI drive is now hiring students for different packages such as 4 LPA,
          5 LPA and 6.5 LPA. The written round is generally conducted in
          multiple levels to give students multiple opportunities.
        </p>

        <ul className="highlight-list">
          <li>Day 1: Cognitive Assessment takes place.</li>
          <li>
            Day 2: Level 1 contains Spoken English round and one coding question
            of medium difficulty.
          </li>
          <li>
            Level 2 contains one coding question of higher difficulty.
          </li>
        </ul>

        <ol className="highlight-list">
          <li>Salary after Day 1 + Spoken English Round: 4 LPA</li>
          <li>Salary after Day 1 + Level 1: 5 LPA</li>
          <li>Salary after Day 1 + Level 1 + Level 2: 6.5 LPA</li>
        </ol>
      </section>

      <section className="content-section">
        <h2>LTI Detailed Syllabus</h2>

        <ul className="highlight-list">
          <li>
            <b>Round 1</b>
            <ul>
              <li>Verbal Ability - 12 Questions</li>
              <li>Logical Ability - 12 Questions</li>
              <li>Numerical Ability - 12 Questions</li>
              <li>CMCQ - 20 Questions</li>
              <li>Pseudo Code - 20 Questions</li>
              <li>Automata Coding - 2 Questions</li>
            </ul>
          </li>
          <li>Round 2: Technical Interview</li>
          <li>Round 3: HR Interview</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>LTI Exam Pattern</h2>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Section Name</th>
                <th>Total Questions</th>
                <th>Sectional Time</th>
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

      <section className="content-section syllabus-section">
        <h2>LTI Detailed Syllabus 2025</h2>

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
          <h3>LTI {activeTab} Syllabus</h3>

          {activeTab === "Quants" && (
            <p>
              Quantitative Aptitude section includes arithmetic and numerical
              ability topics asked in LTI written test.
            </p>
          )}

          {activeTab === "Verbal" && (
            <p>
              Verbal Reasoning section checks English understanding, vocabulary
              and reading skills.
            </p>
          )}

          {activeTab === "Logical" && (
            <p>
              Logical Reasoning section checks analytical thinking and
              problem-solving ability.
            </p>
          )}

          {activeTab === "CMCQs" && (
            <p>
              CMCQ based topics are asked to test computer fundamentals and
              technical basics.
            </p>
          )}

          {activeTab === "Pseudo Code" && (
            <p>
              Pseudo Code questions are based on programming logic and basic
              coding flow.
            </p>
          )}

          {activeTab === "Automata Coding" && (
            <p>
              Automata Coding is high difficulty coding round where students can
              use programming languages such as C, C++, Java and Python.
            </p>
          )}

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="note">
            Prepare this section carefully to improve speed, accuracy and
            confidence for LTI placement exam.
          </p>
        </div>
      </section>
    </div>
  );
}