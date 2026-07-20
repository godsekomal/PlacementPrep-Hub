import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./IBM.css";

export default function IBM() {
  const [activeTab, setActiveTab] = useState("English Language Test");

  const examPattern = [
    ["Coding", "2"],
    ["English Language Test", "10"],
  ];

  const tabs = {
    "English Language Test": [
      "Active / Passive Voice",
      "Fill in the Blanks",
      "Spotting Error",
      "Spelling",
      "Synonyms",
      "Antonyms",
      "Prepositions and Conjunctions",
      "Tenses and Articles",
    ],

    Coding: [
      "Coding round is generally conducted on HackerRank.",
      "There can be questions based on strings, arrays and basic programming logic.",
      "Number of Coding Questions: 2",
      "Time Limit: Approx. 60 Minutes",
      "MCQ Topics: DBMS, OS, OOPS and Programming Concepts",
    ],

    "Cognitive Ability Games": [
      "NOTE: NOT ASKED ANYMORE.",
      "Shortcuts",
      "Gridlock",
      "Resemble",
      "These games were used to assess problem-solving and decision-making skills.",
    ],

    "Learning Agility Assessments": [
      "NOTE: NOT ASKED ANYMORE.",
      "This was a psychometric type assessment.",
      "Number of Questions: 50",
      "Total Time Limit: 30 Minutes",
      "Options: Strongly Agree, Agree, Neutral, Disagree, Strongly Disagree",
    ],
  };

  return (
    <div className="ibm-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>IBM Syllabus 2026</h1>

        <p>
          <b>IBM Syllabus 2026</b> includes IBM ASE online assessment pattern,
          coding test, English language test, group discussion and Technical /
          HR interview preparation details.
        </p>
      </section>

      <section className="content-section">
        <h2>IBM Syllabus 2026 | Online Test Pattern</h2>

        <p>
          IBM has revised its hiring process and mainly focuses on the{" "}
          <b>Coding Test</b> and <b>English Test</b>, followed by{" "}
          <b>Group Discussion</b> and <b>Technical / HR Interviews</b>.
        </p>

        <p>
          This guide covers the latest IBM placement syllabus, including coding
          round details and English assessment topics to help students prepare
          effectively.
        </p>
      </section>

      <section className="content-section">
        <h2>IBM Recruitment Process 2026</h2>

        <ul className="highlight-list">
          <li>Round 1: Online Coding + English Test</li>
          <li>Round 2: Group Discussion Round</li>
          <li>Round 3: Interview - HR + Technical</li>
        </ul>

        <p className="red-note">
          There will be 2 sections in the Online Written Test. Each section is
          an elimination round.
        </p>

        <p>
          The two main sections of IBM online assessment are IBM Coding Test and
          IBM English Language Test.
        </p>
      </section>

      <section className="content-section">
        <h2>IBM Exam Pattern</h2>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Name of the Section</th>
                <th>Number of Questions</th>
              </tr>
            </thead>

            <tbody>
              {examPattern.map((row, index) => (
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
        <h2>IBM Detailed Syllabus</h2>

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
          <h3>IBM {activeTab}</h3>

          {activeTab === "English Language Test" && (
            <>
              <p>
                IBM English Language Test checks your basic English proficiency
                and grammar understanding.
              </p>

              <p>
                <b>Total Number of Questions:</b> 10
              </p>

              <p>
                <b>Total Time:</b> 10 Minutes
              </p>
            </>
          )}

          {activeTab === "Coding" && (
            <p>
              Coding section consists of coding problems and MCQ based technical
              questions. Students should focus on programming logic and core
              computer science basics.
            </p>
          )}

          {(activeTab === "Cognitive Ability Games" ||
            activeTab === "Learning Agility Assessments") && (
            <p className="red-note">NOTE: NOT ASKED ANYMORE.</p>
          )}

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="note">
            Prepare this section carefully and revise concepts regularly before
            appearing for IBM recruitment process.
          </p>
        </div>
      </section>
    </div>
  );
}