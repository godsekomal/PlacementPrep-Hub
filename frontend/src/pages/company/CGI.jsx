import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CGI.css";

export default function CGI() {
  const [activeTab, setActiveTab] = useState("Quants");

  const tabs = {
    Quants: [
      "Pipes and Cisterns",
      "Averages",
      "Profit and Loss",
      "Time, Speed and Distance",
      "LCM and HCF",
      "Divisibility",
      "Numbers, Decimal Fractions and Power",
      "Permutation and Combination",
      "Probability",
      "Ratio and Proportion",
      "Algebra",
      "Surds and Indices",
      "Inverse",
      "Geometry and Coordinate Geometry",
      "Clocks and Calendar",
      "Logarithms",
      "Time and Work",
    ],

    "Verbal English": [
      "Subject-Verb Agreement",
      "Tenses and Articles",
      "Sentence Formation",
      "Inferential and Literal Comprehension",
      "Contextual Vocabulary",
      "Comprehension Ordering",
      "Synonyms",
      "Antonyms",
      "Jumbled Sentence",
      "Error Identification",
      "Sentence Improvement and Construction",
    ],

    Logical: [
      "Coding and Number Series Recognition",
      "Seating Arrangements",
      "Inferred Meaning",
      "Logical Word Sequence",
      "Data Sufficiency",
      "Selection Decision Tables",
      "Odd Man Out",
      "Statement and Conclusion",
      "Analogy and Classification Recognition",
      "Coding Deductive Logic",
      "Blood Relation",
      "Directional Sense",
      "Objective Reasoning",
    ],

    "Computer Programming": [
      "Abstraction",
      "Encapsulation",
      "Complexity Theory",
      "Searching and Sorting",
      "Data Types",
      "Iteration, Recursion and Decision",
      "Procedure, Functions and Scope",
      "Arrays",
      "Linked Lists",
      "Trees",
      "Graphs",
      "Stacks and Queues",
      "Hash Tables",
      "Heaps",
      "Polymorphism",
    ],
  };

  return (
    <div className="cgi-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>CGI Syllabus and Latest Pattern 2025</h1>

        <p>
          <b>CGI Syllabus 2025</b> includes aptitude, verbal English, logical
          reasoning and computer programming sections. This page provides the
          latest CGI placement exam pattern and important topics for preparation.
        </p>
      </section>

      <section className="content-section">
        <h2>CGI Written Test Paper with Latest Syllabus</h2>

        <p>
          CGI recruitment process checks problem-solving ability, English
          communication, logical thinking and programming fundamentals. Students
          should prepare each section carefully to perform well in the placement
          exam.
        </p>

        <p>The CGI online test includes the following sections:</p>

        <ul className="highlight-list">
          <li>Aptitude Test - Quants, Logical and English</li>
          <li>Computer Programming</li>
          <li>Technical and HR Interview</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>CGI Online Test Syllabus 2025</h2>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Section</th>
                <th>Topics Included</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Section 1</td>
                <td>Aptitude Test - Quants, Logical, English</td>
              </tr>

              <tr>
                <td>Section 2</td>
                <td>Computer Programming</td>
              </tr>

              <tr>
                <td>Section 3</td>
                <td>Interview Round</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section">
        <h2>Qualification Criteria</h2>

        <ul className="highlight-list">
          <li>Degree: BE / B.Tech</li>
          <li>Branches: CSE / IT / Information Science / ECE / Telecom</li>
          <li>Cut-off marks may vary as per company requirements.</li>
          <li>No current backlog is preferred.</li>
          <li>
            Exposure to Java, .NET, C, C++ or Python coding is an added
            advantage.
          </li>
        </ul>
      </section>

      <section className="content-section syllabus-section">
        <h2>CGI Recent Year Syllabus and Paper Pattern 2025</h2>

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
          <h3>CGI {activeTab} Syllabus</h3>

          {activeTab === "Quants" && (
            <p>
              Quantitative Aptitude section checks arithmetic, calculation and
              numerical problem-solving ability.
            </p>
          )}

          {activeTab === "Verbal English" && (
            <p>
              Verbal English section checks grammar, vocabulary and
              comprehension skills.
            </p>
          )}

          {activeTab === "Logical" && (
            <p>
              Logical section checks reasoning ability, arrangements, series and
              decision-making skills.
            </p>
          )}

          {activeTab === "Computer Programming" && (
            <p>
              Computer Programming section focuses on programming fundamentals,
              data structures and object-oriented concepts.
            </p>
          )}

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="note">
            Prepare this section regularly to improve accuracy and confidence
            for CGI placement exam.
          </p>
        </div>
      </section>
    </div>
  );
}