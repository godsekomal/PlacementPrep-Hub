import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HCL.css";

export default function HCL() {
  const [activeTab, setActiveTab] = useState("Summary");

  const hclInfo = [
    ["Number of Rounds", "4 Rounds"],
    ["Number of Questions", "77 Questions"],
    ["Time Limit", "95 Minutes"],
    ["Difficulty Level", "Moderate"],
    ["Total Number of Sections", "5 Sections"],
  ];

  const tabs = {
    Summary: [
      "Numerical Ability - 15 Questions, 15 minutes",
      "Verbal Ability - 15 Questions, 15 minutes",
      "Logical Reasoning Ability - 15 Questions, 15 minutes",
      "Computer Fundamentals - 30 Questions, 30 minutes",
      "Coding - 2 Questions, 20 minutes",
    ],

    Aptitude: [
      "HCF and LCM",
      "Number System",
      "Time and Work",
      "Pipes and Cisterns",
      "Permutation and Combination",
      "Geometry",
      "Time, Speed and Distance",
      "Probability",
      "Profit and Loss",
      "Interest, Mixtures and Allegations",
      "Logarithms",
    ],

    Logical: [
      "Directional Sense",
      "Logical Reasoning",
      "Coding and Decoding",
      "Data Sufficiency",
      "Pattern Analogy",
      "Number Series",
      "Logical Statement Assumptions",
    ],

    Verbal: [
      "Sentence Correction",
      "Reading Comprehension",
      "Grammar",
      "Synonyms and Antonyms",
      "Fill in the Blanks",
      "Spellings",
    ],

    "Computer Fundamentals": [
      "Computer Basics",
      "Data Structures",
      "OOPS",
      "Code Input Output",
      "Networking",
      "Operating System",
      "DBMS",
      "Total Questions: 30 MCQs",
      "Total Time: 30 minutes",
    ],

    Coding: [
      "Number of Questions: 2",
      "Negative Marking: No",
      "Sectional Time: 20 minutes",
      "Basic Programming Logic",
      "Arrays",
      "Strings",
      "Loops and Conditions",
    ],
  };

  return (
    <div className="hcl-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>HCL Detailed Syllabus 2025</h1>

        <p>
          <b>HCL Syllabus 2025</b> includes aptitude, logical reasoning, verbal
          ability, computer fundamentals and coding sections. This page provides
          updated HCL exam pattern and section-wise syllabus for freshers.
        </p>
      </section>

      <section className="content-section">
        <h2>HCL Syllabus 2025 for Freshers</h2>

        <p>
          HCL has changed its syllabus and paper pattern. The latest HCL test
          includes multiple sections to check aptitude, reasoning, English,
          computer fundamentals and coding skills.
        </p>

        <ul className="highlight-list">
          <li>Aptitude</li>
          <li>Logical</li>
          <li>Verbal</li>
          <li>Computer Fundamentals</li>
          <li>Coding</li>
        </ul>

        <h3>Important Note</h3>

        <ol className="highlight-list">
          <li>There will be no negative marking.</li>
          <li>HCL test may be adaptive.</li>
        </ol>
      </section>

      <section className="content-section">
        <h2>HCL Important Details</h2>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>HCL</th>
                <th>Important Details</th>
              </tr>
            </thead>

            <tbody>
              {hclInfo.map((row, index) => (
                <tr key={index}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section syllabus-section">
        <h2>Detailed Syllabus for HCL 2025</h2>

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
          <h3>HCL {activeTab} Syllabus</h3>

          {activeTab === "Summary" && (
            <p>Here are the sections asked in the HCL test.</p>
          )}

          {activeTab === "Aptitude" && (
            <p>Numerical Ability checks mathematical and calculation skills.</p>
          )}

          {activeTab === "Logical" && (
            <p>Logical section checks reasoning and analytical ability.</p>
          )}

          {activeTab === "Verbal" && (
            <p>Verbal section checks English grammar and comprehension.</p>
          )}

          {activeTab === "Computer Fundamentals" && (
            <p>
              Computer Fundamentals section checks core computer science basics.
            </p>
          )}

          {activeTab === "Coding" && (
            <p>Coding section checks basic programming and logic building.</p>
          )}

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="note">
            Practice this section regularly to improve accuracy and confidence
            for HCL placement exam.
          </p>
        </div>
      </section>
    </div>
  );
}