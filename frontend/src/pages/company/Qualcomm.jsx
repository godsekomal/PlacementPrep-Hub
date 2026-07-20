import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Qualcomm.css";

export default function Qualcomm() {
  const [activeTab, setActiveTab] = useState("Aptitude");

  const pattern = [
    ["Total Number of Questions", "60 Questions"],
    ["Total Time", "90 Minutes"],
    ["Quants", "20 Questions - 30 Minutes"],
    ["Programming MCQ", "20 Questions - 30 Minutes"],
    ["Technical Section", "20 Questions - 30 Minutes"],
    ["Technical Interview", "1.5 Hours"],
    ["HR Interview", "15 Minutes"],
    ["Negative Marking", "No"],
  ];

  const tabs = {
    Aptitude: [
      "Number System",
      "Set Theory",
      "Equations",
      "Averages",
      "Percentages",
      "Venn Diagrams",
      "Ratio and Proportion",
      "Time and Work",
      "Profit and Loss",
      "Time, Speed and Distance",
    ],

    "Computer Programming": [
      "C Programming",
      "C++",
      "Basics of OOPS",
      "Programming Principles",
      "Code Snippets",
      "Input and Output",
      "Functions",
      "Arrays",
      "Pointers",
    ],

    "Computer Science": [
      "Introduction to OS",
      "File Systems",
      "RDBMS",
      "Oracle",
      "MySQL",
      "Basics of Networking",
      "Basics of Routing",
      "Stacks and Queue",
      "Linked List",
      "Trees",
    ],

    "Electronics Technical": [
      "Digital Electronics",
      "Analog Electronics",
      "Microprocessors",
      "Communication Systems",
      "Signals and Systems",
      "Network Theory",
      "Control Systems",
      "VLSI Basics",
    ],
  };

  return (
    <div className="qualcomm-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>Qualcomm Syllabus 2024</h1>

        <p>
          <b>Qualcomm Syllabus 2024</b> includes aptitude test, programming MCQ,
          computer science technical section and interview rounds. This page
          provides the latest Qualcomm online test pattern and section-wise
          preparation topics.
        </p>
      </section>

      <section className="content-section">
        <h2>Qualcomm Aptitude Test Syllabus 2024</h2>

        <p>
          Qualcomm aptitude test contains questions from quants, programming MCQ
          and technical sections. The total test duration is around 90 minutes.
          Candidates should focus on both problem-solving and technical basics.
        </p>

        <p>
          There is usually <b>no negative marking</b> in Qualcomm online test.
        </p>
      </section>

      <section className="content-section">
        <h2>Qualcomm Online Test Pattern</h2>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Section</th>
                <th>Important Information</th>
              </tr>
            </thead>

            <tbody>
              {pattern.map((row, index) => (
                <tr key={index}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section">
        <h2>Qualcomm Written Test Sections</h2>

        <ul className="highlight-list">
          <li>Quants Questions</li>
          <li>Programming MCQ Questions</li>
          <li>Technical Section Questions</li>
          <li>Technical Interview</li>
          <li>HR Interview</li>
        </ul>
      </section>

      <section className="content-section syllabus-section">
        <h2>Qualcomm Detailed Syllabus</h2>

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
          <h3>Qualcomm {activeTab} Syllabus</h3>

          {activeTab === "Aptitude" && (
            <p>
              Aptitude section checks mathematical ability, logical thinking and
              problem-solving speed.
            </p>
          )}

          {activeTab === "Computer Programming" && (
            <p>
              Programming section checks C, C++, OOPS and basic programming
              logic.
            </p>
          )}

          {activeTab === "Computer Science" && (
            <p>
              Computer Science section includes OS, DBMS, networking and data
              structure concepts.
            </p>
          )}

          {activeTab === "Electronics Technical" && (
            <p>
              Electronics technical section is mainly for ECE / electrical
              related branches.
            </p>
          )}

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="note">
            Practice this section regularly to improve accuracy and confidence
            for Qualcomm placement exam.
          </p>
        </div>
      </section>
    </div>
  );
}