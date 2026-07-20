import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Comviva.css";

export default function Comviva() {
  const [activeTab, setActiveTab] = useState("Quants");

  const tabs = {
    Quants: [
      "Number System",
      "Time, Speed and Distance",
      "Time and Work",
      "Geometry",
      "Ratio and Proportion",
      "Percentages",
      "Profit and Loss",
      "Permutations and Combinations",
      "Difficulty Level: Hard",
      "Importance: Medium",
      "Suggested Time: 10 minutes",
    ],

    Verbal: [
      "Sentence Correction and Completion",
      "Contextual Vocabulary",
      "Subject-Verb Agreement",
      "Tenses and Articles",
      "Comprehension Ordering",
      "Difficulty Level: Easy",
      "Importance: Medium",
      "Suggested Time: 8 minutes",
    ],

    Logical: [
      "Coding and Decoding",
      "Data Arrangement",
      "Syllogism",
      "Data Sufficiency",
      "Blood Relation",
      "Difficulty Level: Medium",
      "Importance: Medium",
      "Suggested Time: 8 minutes",
    ],

    "Technical - CS": [
      "C / C++ / Java Concepts",
      "Computer Fundamentals",
      "Operating Systems",
      "Data Structures",
      "DBMS",
    ],

    "Technical - Extc": [
      "Networking",
      "Wireless Communication",
      "Microwave Engineering",
      "Optical Fiber and Communication",
    ],
  };

  return (
    <div className="comviva-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>Mahindra ComViva Syllabus 2025</h1>

        <p>
          <b>Mahindra ComViva Syllabus</b> includes aptitude, verbal, logical
          reasoning and technical sections. This page provides the latest test
          pattern and important topics for placement preparation.
        </p>
      </section>

      <section className="content-section">
        <h2>Mahindra ComViva Latest Pattern 2025</h2>

        <p>
          Mahindra ComViva recruitment process checks aptitude, communication
          skills, logical thinking and technical knowledge. Students should
          prepare section-wise to perform well in the online test and interview.
        </p>

        <p>
          The test pattern may vary depending on college, role and recruitment
          process. The following sections are commonly included in the written
          assessment.
        </p>

        <ul className="highlight-list">
          <li>Quantitative Aptitude</li>
          <li>Verbal Ability</li>
          <li>Logical Reasoning</li>
          <li>Technical Section for CS / IT</li>
          <li>Technical Section for ENTC / Electronics</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Mahindra ComViva Exam Overview</h2>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Section</th>
                <th>Important Information</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Quants</td>
                <td>Number system, ratio, percentage, profit loss and time work</td>
              </tr>

              <tr>
                <td>Verbal</td>
                <td>Grammar, vocabulary and comprehension based questions</td>
              </tr>

              <tr>
                <td>Logical</td>
                <td>Reasoning, coding-decoding, arrangements and syllogism</td>
              </tr>

              <tr>
                <td>Technical - CS</td>
                <td>C, C++, Java, DBMS, OS and data structures</td>
              </tr>

              <tr>
                <td>Technical - Extc</td>
                <td>Networking, wireless communication and electronics basics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section syllabus-section">
        <h2>Mahindra ComViva Detailed Syllabus 2025</h2>

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
          <h3>Mahindra ComViva {activeTab} Syllabus</h3>

          {activeTab === "Quants" && (
            <p>
              Quantitative Aptitude section checks mathematical and numerical
              problem-solving ability.
            </p>
          )}

          {activeTab === "Verbal" && (
            <p>
              Verbal section checks English grammar, vocabulary and reading
              understanding.
            </p>
          )}

          {activeTab === "Logical" && (
            <p>
              Logical Reasoning section tests analytical thinking and reasoning
              ability.
            </p>
          )}

          {activeTab === "Technical - CS" && (
            <p>
              Technical CS section focuses on programming and computer science
              fundamentals.
            </p>
          )}

          {activeTab === "Technical - Extc" && (
            <p>
              Technical EXTC section focuses on networking, communication and
              electronics basics.
            </p>
          )}

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="note">
            Prepare this section regularly to improve accuracy and confidence
            for Mahindra ComViva placement exam.
          </p>
        </div>
      </section>
    </div>
  );
}