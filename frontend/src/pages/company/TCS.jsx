import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TCS.css";

export default function TCS() {
  const [activeTab, setActiveTab] = useState("Foundation Quants");

  const examPattern = [
    ["Part A: Foundation Section", "Numerical Ability", "25 mins", "20 Questions"],
    ["Part A: Foundation Section", "Reasoning Ability", "25 mins", "20 Questions"],
    ["Part A: Foundation Section", "Verbal Ability", "25 mins", "25 Questions"],
    ["Part B: Advanced Section", "Advanced Quants + Logical", "25 mins", "14-16 Questions"],
    ["Part B: Advanced Section", "Advanced Coding", "90 mins", "2 Questions"],
  ];

  const tabs = {
    "Foundation Quants": [
      "Number System",
      "Divisibility",
      "Numbers and Decimal Fractions",
      "LCM and HCF",
      "Geometry",
      "Shapes, Area and Perimeter",
      "Ages",
      "Averages",
      "Equations",
      "Probability",
      "Percentages",
      "Profit and Loss",
      "Work and Time",
      "Clocks and Calendar",
      "Ratio and Proportion",
      "Series and Progressions",
      "Data Interpretation",
      "Permutation and Combination",
    ],

    "Foundation Verbal Ability": [
      "Spelling",
      "Grammar",
      "Selecting Words",
      "Error Correction",
      "Passage Ordering",
      "Error Identification",
      "Sentence Completion",
      "Synonyms and Antonyms",
      "Reading Comprehension",
      "Cloze Test",
    ],

    "Foundation Logical": [
      "Word Identification",
      "Word Pattern",
      "Number Series",
      "Blood Relations",
      "Data Arrangements",
      "Seating Arrangement",
      "Cube Folding",
      "Paper Cuts and Folds",
      "Decision Making",
      "Data Sufficiency",
      "Syllogism",
      "Logical Venn Diagram",
      "Visual Reasoning",
    ],

    "Programming Logic": [
      "Data Types",
      "Functions and Scope",
      "Recursion and Iteration",
      "File Handling",
      "Arrays",
      "Variables and Registers",
      "Loops",
      "Command Line Argument",
      "OOPS",
      "Input Output Questions",
      "Stacks and Queue",
      "Linked List",
      "Trees",
      "Graphs",
      "Dynamic Programming",
      "Searching and Sorting",
      "Time Complexity",
    ],

    "Advanced Coding": [
      "C",
      "C++",
      "Java",
      "Python",
      "Number of Questions: 2 to 3",
      "Total Time: 90 Minutes",
      "Difficulty Level: Moderate to High",
      "Cut-off: Solve at least 2 questions completely",
    ],

    "Advanced Quants": [
      "HCF and LCM",
      "Number System",
      "Geometry",
      "Ages",
      "Allegations and Mixtures",
      "Averages",
      "Clocks and Calendars",
      "Equations",
      "Percentages",
      "Permutation and Combination",
      "Probability",
      "Profit and Loss",
      "Ratio and Proportion",
      "Series and Progressions",
      "Time Speed and Distance",
      "Time and Work",
      "Data Interpretation",
    ],

    "Advanced Logical Ability": [
      "Words Identification",
      "Meaningful Word Creation",
      "Numerical Patterns",
      "Letter Analogy",
      "Ages",
      "Blood Relations",
      "Complex Seating Arrangements",
      "Distance and Directions",
      "Odd Man Out",
      "Symbols and Notations",
      "Cube and Paper Folding",
      "Data Sufficiency",
      "Decision Making",
      "Syllogism",
      "Prepositional Reasoning",
      "Visual Reasoning",
    ],

    "Coding Not Asked In NQT": [
      "C",
      "C++",
      "Java",
      "Python",
      "Perl",
      "This section is not asked in TCS NQT but can appear in other coding profiles.",
    ],
  };

  return (
    <div className="tcs-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>TCS Syllabus for Freshers 2026</h1>

        <p>
          <b>TCS Syllabus 2026</b> covers both on-campus and off-campus
          placements. As per the latest pattern, the test is divided into
          Foundation and Advanced sections for different job profiles like Ninja,
          Digital and Prime.
        </p>
      </section>

      <section className="content-section">
        <h2>Important Note</h2>

        <ul className="highlight-list">
          <li>There will be no negative marking.</li>
          <li>TCS NQT is non-adaptive this year.</li>
          <li>
            Calculator and rough paper may be available on desktop screen as per
            exam instructions.
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2>TCS Syllabus Change Details</h2>

        <p>TCS syllabus has changed recently. The sections asked are:</p>

        <h3>Round 1</h3>
        <ul className="highlight-list">
          <li>Numerical Ability</li>
          <li>Verbal English</li>
          <li>Reasoning Ability</li>
          <li>Programming Logic MCQ</li>
          <li>Coding Ability for Advanced Round</li>
        </ul>

        <h3>Round 2</h3>
        <ul className="highlight-list">
          <li>Advanced Aptitude + Advanced Reasoning Ability</li>
          <li>Advanced Coding</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>TCS Exam Pattern</h2>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Section</th>
                <th>Sub-Section</th>
                <th>Time</th>
                <th>Questions</th>
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

        <p className="note">
          Foundation section is mandatory for Ninja profile, while Advanced
          section is mandatory for Digital and Prime profile.
        </p>
      </section>

      <section className="content-section syllabus-section">
        <h2>TCS Aptitude Syllabus Analysis</h2>

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
          <h3>TCS {activeTab} Syllabus</h3>

          {activeTab === "Foundation Quants" && (
            <p>
              This section includes numerical ability topics from arithmetic,
              data interpretation and basic mathematics.
            </p>
          )}

          {activeTab === "Foundation Verbal Ability" && (
            <p>
              TCS verbal section focuses on grammar, reading comprehension,
              vocabulary and sentence-based questions.
            </p>
          )}

          {activeTab === "Foundation Logical" && (
            <p>
              Logical ability section tests reasoning, pattern recognition,
              arrangements and decision-making skills.
            </p>
          )}

          {activeTab === "Programming Logic" && (
            <p>
              Programming Logic section contains programming fundamentals and
              MCQ-based coding concepts.
            </p>
          )}

          {activeTab === "Advanced Coding" && (
            <p>
              Advanced coding round generally contains medium to high difficulty
              programming questions.
            </p>
          )}

          {activeTab === "Advanced Quants" && (
            <p>
              Advanced quants is combined with advanced reasoning and has higher
              difficulty level.
            </p>
          )}

          {activeTab === "Advanced Logical Ability" && (
            <p>
              This section includes advanced reasoning topics asked in Round 2.
            </p>
          )}

          {activeTab === "Coding Not Asked In NQT" && (
            <p className="red-note">
              Coding round is not asked in TCS NQT, but may be asked in other
              TCS profiles.
            </p>
          )}

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="note">
            Practice this section regularly to improve speed, accuracy and
            confidence for TCS placement exam.
          </p>
        </div>
      </section>
    </div>
  );
}