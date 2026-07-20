import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MindTree.css";

export default function MindTree() {
  const [activeTab, setActiveTab] = useState("English Comprehension");

  const examPattern = [
    ["English Comprehension", "12 Questions", "15 mins"],
    ["Quantitative Ability", "12 Questions", "15 mins"],
    ["Logical Reasoning", "12 Questions", "15 mins"],
    ["Analytical Ability", "10 Questions", "10 mins"],
    ["Computer Programming", "20 Questions", "20 mins"],
    ["Computer Science", "20 Questions", "20 mins"],
    ["Spoken English", "20 Questions approx.", "20 mins"],
  ];

  const tabs = {
    "English Comprehension": [
      "Reading Comprehension",
      "Passage Based Questions",
      "Inference Based Questions",
      "Main Idea Identification",
      "Supporting Details",
      "Total Questions: 12",
      "Total Time: 15 mins",
    ],

    "Quantitative Ability": [
      "LCM and HCF",
      "Divisibility",
      "Numbers and Decimal Fractions",
      "Time and Work",
      "Pipes and Cisterns",
      "Averages",
      "Profit and Loss",
      "Simple and Compound Interest",
      "Time, Speed and Distance",
      "Inverse",
      "Ratio and Proportion",
      "Algebra",
      "Surds and Indices",
      "Logarithms",
      "Permutation and Combination",
      "Probability",
      "Area, Shapes and Perimeter",
      "Percentages",
    ],

    "Logical Reasoning and Analytical Ability": [
      "Blood Relation",
      "Directional Sense",
      "Analogy and Classification",
      "Odd Man Out",
      "Statement and Conclusion",
      "Seating Arrangement",
      "Logical Word Sequence",
      "Inferred Meaning",
      "Coding Deductive Logic",
      "Objective Reasoning",
      "Selection Decision Tables",
      "Data Sufficiency",
      "Mathematical Order",
    ],

    "Computer Programming": [
      "Basic Programming",
      "Data Structures",
      "OOPS",
      "Pseudo Code",
      "Total Questions: 20",
      "Total Time: 20 mins",
    ],

    "Computer Science": [
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Total Questions: 20",
      "Total Time: 20 mins",
      "Negative Marking: No",
    ],

    "Spoken English": [
      "Making correct and meaningful sentences",
      "Subject-Verb Agreement",
      "Proper use of Tenses",
      "Articles and Prepositions",
      "Conjunctions and Connectors",
      "Pronouns and Modifiers",
      "Converting Direct Speech to Indirect Speech",
      "Total Questions: 20 approx.",
      "Total Time: 20 minutes",
    ],
  };

  return (
    <div className="mindtree-page">
      <Link to="/companies" className="company-back">
        ← Back
      </Link>

      <section className="company-hero">
        <h1>LTIMindTree Syllabus and Online Test Pattern 2025</h1>

        <p>
          <b>LTIMindTree Syllabus 2025</b> includes English comprehension,
          quantitative ability, logical reasoning, analytical ability, computer
          programming, computer science and spoken English sections.
        </p>
      </section>

      <section className="content-section">
        <h2>LTIMindTree Syllabus for Freshers 2025</h2>

        <p>
          LTIMindTree recruitment process is divided into online assessment,
          technical interview and HR interview. The online assessment checks
          aptitude, reasoning, coding basics, computer fundamentals and English
          communication skills.
        </p>

        <p>
          This page includes updated LTIMindTree syllabus, exam pattern and
          section-wise topics to help students prepare properly.
        </p>

        <h3>MindTree Placement Process</h3>

        <ol className="highlight-list">
          <li>
            <b>Online Assessment</b>
            <ul>
              <li>English Comprehension</li>
              <li>Quantitative Ability</li>
              <li>Logical Reasoning</li>
              <li>Basic Analytical Ability</li>
              <li>Computer Programming</li>
              <li>Computer Science</li>
              <li>Spoken English</li>
            </ul>
          </li>

          <li>Technical Interview</li>
          <li>HR Interview</li>
        </ol>
      </section>

      <section className="content-section">
        <h2>LTIMindTree Detailed Information</h2>

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
        <h2>Detailed MindTree Syllabus and Pattern 2025</h2>

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
          <h3>LTIMindTree {activeTab} Syllabus 2025</h3>

          {activeTab === "English Comprehension" && (
            <p>
              English Comprehension section checks the ability to understand and
              interpret written English passages.
            </p>
          )}

          {activeTab === "Quantitative Ability" && (
            <p>
              Quantitative Ability section includes arithmetic and mathematical
              topics asked in the online test.
            </p>
          )}

          {activeTab === "Logical Reasoning and Analytical Ability" && (
            <p>
              Logical and analytical ability section checks reasoning,
              decision-making and problem-solving skills.
            </p>
          )}

          {activeTab === "Computer Programming" && (
            <p>
              Computer Programming section checks basic programming concepts,
              data structures and pseudo code understanding.
            </p>
          )}

          {activeTab === "Computer Science" && (
            <p>
              Computer Science section includes core computer fundamentals such
              as DBMS, OS and Computer Networks.
            </p>
          )}

          {activeTab === "Spoken English" && (
            <p>
              Spoken English section checks grammar, sentence formation and
              ability to use English clearly.
            </p>
          )}

          <ul>
            {tabs[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="note">
            Practice this section regularly to improve accuracy, speed and
            confidence for LTIMindTree placement exam.
          </p>
        </div>
      </section>
    </div>
  );
}