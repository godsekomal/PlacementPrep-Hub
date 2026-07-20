import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Deloitte.css";

export default function Deloitte() {
  const [activeTab, setActiveTab] = useState("Quants");

  const tabs = {
    Quants: [
      "LCM & HCF",
      "Divisibility",
      "Numbers, Decimal Fractions & Power",
      "Time & Work",
      "Pipes & Cisterns",
      "Averages",
      "Profit & Loss",
      "Simple & Compound Interest",
      "Time, Speed & Distance",
      "Problems on Trains",
      "Geometry",
      "Clocks & Calendar",
      "Logarithms",
      "Permutations & Combinations",
      "Probability",
      "Ratio & Proportion",
      "Algebra",
      "Surds & Indices",
      "Allegation & Mixtures",
      "Problems on Ages",
    ],

    "Logical Reasoning": [
      "Blood Relation",
      "Directional Sense",
      "Objective Reasoning",
      "Selection Decision Tables",
      "Analogy",
      "Number Series Pattern Recognition",
      "Odd Man Out",
      "Seating Arrangements",
      "Data Arrangements",
      "Mathematical Orders",
      "Inferred Meaning",
      "Logical Word Sequence",
      "Statement & Conclusion",
      "Syllogism",
      "Data Sufficiency",
    ],

    "Verbal English": [
      "Synonyms",
      "Antonyms",
      "Error Identification",
      "Sentence Improvement",
      "Tenses & Articles",
      "Preposition & Conjunctions",
      "Speech & Voices",
      "Reading Comprehension",
      "Comprehension Ordering",
      "Selecting Words",
      "Sentence Selection",
      "Subject Verb Agreement",
      "Contextual Vocabulary",
    ],

    "Versant Test": [
      "Reading Skills",
      "Listening Skills",
      "Analyzing Skills",
      "Not Asked in Current Pattern",
    ],

    "Computer Fundamentals": [
      "Testing",
      "Computer Science",
      "Networking & Cyber Security",
      "Cloud Computing",
    ],

    Coding: [
      "C",
      "C++",
      "Java",
      "2 Coding Questions",
      "35 Minutes Duration",
    ],
  };

  return (
    <div className="company-page">
      <Link to="/companies" className="back-btn">
        ← Back
      </Link>

      <div className="hero-card">
        <h1>Deloitte Syllabus 2026</h1>

        <p>
          Deloitte recruitment process consists of Shortlisting, Online
          Assessment, Interview and Final Result stages.
        </p>

        <h3>Deloitte Syllabus For 2026</h3>

        <ul>
          <li>Round 1: Shortlisting</li>
          <li>Round 2: Online Assessment</li>
          <li>Round 3: Interview</li>
          <li>Round 4: Final Result</li>
        </ul>

        <h3>Assessment Sections</h3>

        <ul>
          <li>Quantitative Aptitude & Logical Reasoning</li>
          <li>Verbal English</li>
          <li>Computer Fundamentals</li>
          <li>Coding</li>
        </ul>
      </div>

      <div className="table-section">
        <h2>Exam Pattern</h2>

        <table>
          <thead>
            <tr>
              <th>Details</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>No. of Sections</td>
              <td>4</td>
            </tr>
            <tr>
              <td>No. of Questions</td>
              <td>67 Questions</td>
            </tr>
            <tr>
              <td>Time Duration</td>
              <td>90 Minutes</td>
            </tr>
            <tr>
              <td>Negative Marking</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Test Type</td>
              <td>Adaptive</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="tabs-section">
        <h2>Detailed Syllabus 2026</h2>

        <div className="tabs">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <h3>{activeTab}</h3>

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {activeTab === "Quants" && (
            <p className="info">
              Questions: 22 (combined with Logical Reasoning)
            </p>
          )}

          {activeTab === "Logical Reasoning" && (
            <p className="info">
              Questions: 12 (combined with Quantitative Aptitude)
            </p>
          )}

          {activeTab === "Verbal English" && (
            <p className="info">Questions: 13</p>
          )}

          {activeTab === "Computer Fundamentals" && (
            <p className="info">
              Questions: 30 | MCQ Based Technical Section
            </p>
          )}

          {activeTab === "Coding" && (
            <p className="info">
              2 Coding Questions | 35 Minutes Duration
            </p>
          )}
        </div>
      </div>
    </div>
  );
}