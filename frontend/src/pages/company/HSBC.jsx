import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HSBC.css";

export default function HSBC() {
  const [activeTab, setActiveTab] = useState("Verbal English");

  const tabs = {
    "Verbal English": [
      "Synonyms and Antonyms",
      "Contextual Vocabulary",
      "Jumbled Sentence",
      "Sentence Formation",
      "Sentence Correction",
      "Preposition",
      "Grammar",
      "Reading Comprehension",
      "Idioms and Phrases",
      "Speeches and Tenses",
      "Articles",
      "Sentence Selection",
      "Spotting Error",
      "Sentence Arrangements",
    ],

    "Analytical Reasoning": [
      "Coding Deductive Logic",
      "Blood Relation",
      "Directional Sense",
      "Objective Reasoning",
      "Statement and Conclusion",
      "Analogy and Classification Recognition",
      "Coding and Number Series Recognition",
      "Seating Arrangement",
      "Data Sufficiency",
      "Inferred Meaning",
      "Mathematical Orders",
      "Agree Disagree",
      "Statements and Conclusion",
    ],

    "Computer Programming": [
      "C",
      "C++",
      "OOPS Concepts",
      "DBMS",
      "Operating System Concepts",
      "Data Structures and Algorithm",
      "Computer Networks",
      "Computer Architecture and Organization",
    ],

    Aptitude: [
      "Algebra",
      "Equations",
      "Progression",
      "Profit and Loss",
      "Ratio and Proportion",
      "Mensuration",
      "Logarithms",
      "Simple and Compound Interest",
      "Trigonometry",
      "Mixture and Allegations",
      "Divisibility",
      "Series and Progression",
      "HCF and LCM",
      "Areas",
      "Numbers, Relations and Functions",
      "Pipes and Cisterns",
      "Time and Work",
      "Probability",
      "Percentage",
      "Permutation and Combination",
      "Speed and Distance",
      "Averages",
      "Geometry",
    ],
  };

  return (
    <div className="hsbc-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>HSBC Syllabus 2024</h1>

        <p>
          <b>HSBC Syllabus and Paper Pattern 2024</b> includes logical
          reasoning, verbal English, computer fundamentals and aptitude
          sections. This page provides the latest HSBC placement test pattern
          and detailed syllabus for preparation.
        </p>
      </section>

      <section className="content-section">
        <h2>HSBC Syllabus and Paper Pattern 2024</h2>

        <p>
          HSBC conducts recruitment through online assessment rounds for
          on-campus and off-campus placement drives. Students should prepare
          section-wise to understand the test pattern and important topics.
        </p>

        <p>There are 3 main sections in HSBC Online Test Paper:</p>

        <ul className="highlight-list">
          <li>Logical Reasoning</li>
          <li>Verbal English</li>
          <li>Computer Fundamental</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>HSBC Exam Pattern</h2>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Information</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>No. of Sections</td>
                <td>3</td>
              </tr>
              <tr>
                <td>No. of Questions</td>
                <td>45</td>
              </tr>
              <tr>
                <td>Time Duration</td>
                <td>45 mins</td>
              </tr>
              <tr>
                <td>Negative Marking</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Test Type</td>
                <td>Non-Adaptive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section syllabus-section">
        <h2>Detailed HSBC Syllabus and Pattern 2024</h2>

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
          <h3>HSBC {activeTab} Syllabus</h3>

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="note">
            Prepare this section regularly to improve speed and accuracy for
            HSBC placement exam.
          </p>
        </div>
      </section>
    </div>
  );
}