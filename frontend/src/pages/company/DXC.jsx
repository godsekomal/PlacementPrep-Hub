import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DXC.css";

export default function DXC() {
  const [activeTab, setActiveTab] = useState("Quants");

  const tabs = {
    Quants: [
      "LCM & HCF",
      "Divisibility",
      "Number System and Decimal Fraction",
      "Profit & Loss",
      "Simple and Compound Interest",
      "Time, Speed and Distance",
      "Pipes and Cisterns",
      "Averages",
      "Time and Work",
      "Logarithms",
      "Probability",
      "Allegations and Mixtures",
      "Geometry and Coordinate Geometry",
      "Ratio & Proportion",
      "Algebra",
      "Problems on Trains",
      "Clocks & Calendar",
      "Permutation and Combination",
      "Surds & Indices",
      "Problem on Ages",
    ],

    "Verbal English": [
      "Prepositions & Conjunctions",
      "Reading Comprehension",
      "Synonyms",
      "Speech & Tenses",
      "Articles",
      "Error Identification",
      "Sentence Selection",
      "Sentence Correction",
      "Antonyms",
      "Sentence Improvement and Construction",
      "Comprehension Ordering",
      "Selecting Words",
      "Subject Verb Agreement",
      "Contextual Vocabulary",
    ],

    "Logical Reasoning": [
      "Coding-Decoding Logic",
      "Directional Sense",
      "Analogy and Classification",
      "Logical Word Sequence",
      "Arrangements",
      "Statement & Conclusion",
      "Seating Arrangements",
      "Inferred Meaning",
      "Blood Relation",
      "Objective Reasoning",
      "Selection Decision Tables",
      "Number Series Pattern Recognition",
      "Odd Man Out",
      "Mathematical Orders",
      "Syllogism",
      "Data Sufficiency",
    ],

    CMCQ: [
      "C / C++ / Java Concepts",
      "Computer Fundamentals",
      "Operating Systems",
      "Data Structures",
      "DBMS",
    ],

    Automata: [
      "Coding Logic",
      "Basic Programming",
      "Arrays",
      "Strings",
      "Loops",
      "Functions",
      "Debugging",
    ],

    "Written Communication Test": [
      "Essay Structure",
      "Correct Grammar",
      "Punctuation and Spelling",
      "Ideas Worth Noting",
      "Excellent Vocabulary",
      "Variety of Sentences",
      "Avoid spelling mistakes",
      "Avoid grammatical mistakes",
      "Avoid irrelevant points",
    ],
  };

  return (
    <div className="dxc-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>DXC Technology Latest Syllabus 2025</h1>

        <p>
          <b>DXC Technology Syllabus 2025</b> includes aptitude, logical
          reasoning, verbal English, computer MCQs, automata and written
          communication test. This page gives the latest online test pattern and
          important topics.
        </p>
      </section>

      <section className="content-section">
        <h2>DXC Technology Online Test Syllabus</h2>

        <p>
          DXC Technology conducts its first round through online tests. Students
          should prepare section-wise to score well in the written assessment.
        </p>

        <p>DXC preparation dashboard consists of:</p>

        <ul className="highlight-list">
          <li>Quants</li>
          <li>Logical Reasoning</li>
          <li>Verbal English</li>
          <li>Computer MCQs</li>
          <li>Automata</li>
          <li>Written Communication Test</li>
          <li>Coding Questions</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>DXC Exam Overview</h2>

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
                <td>Number of Sections</td>
                <td>7</td>
              </tr>

              <tr>
                <td>Negative Marking</td>
                <td>No</td>
              </tr>

              <tr>
                <td>Registration Mode</td>
                <td>Online</td>
              </tr>

              <tr>
                <td>Platform</td>
                <td>AMCAT-SHL Platform</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section">
        <h2>Additional Information</h2>

        <ul className="highlight-list">
          <li>DXC hires through the AMCAT-SHL platform.</li>
          <li>Previously answered questions cannot be revisited.</li>
          <li>All questions are mandatory.</li>
          <li>There is no negative marking.</li>
        </ul>
      </section>

      <section className="content-section syllabus-section">
        <h2>DXC Detailed Syllabus 2025</h2>

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
          <h3>DXC {activeTab} Syllabus</h3>

          {activeTab === "Quants" && (
            <p>
              Quantitative section checks mathematical problem-solving ability
              and calculation speed.
            </p>
          )}

          {activeTab === "Verbal English" && (
            <p>
              Verbal English section checks grammar, comprehension and
              vocabulary skills.
            </p>
          )}

          {activeTab === "Logical Reasoning" && (
            <p>
              Logical Reasoning section checks analytical thinking and reasoning
              ability.
            </p>
          )}

          {activeTab === "CMCQ" && (
            <p>
              CMCQ section checks computer fundamentals and programming basics.
            </p>
          )}

          {activeTab === "Automata" && (
            <p>
              Automata section checks coding logic, debugging and basic
              programming concepts.
            </p>
          )}

          {activeTab === "Written Communication Test" && (
            <p>
              Written Communication Test checks essay writing, grammar,
              vocabulary and sentence structure.
            </p>
          )}

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="note">
            Practice this section regularly to improve speed, accuracy and
            confidence for DXC placement exam.
          </p>
        </div>
      </section>
    </div>
  );
}