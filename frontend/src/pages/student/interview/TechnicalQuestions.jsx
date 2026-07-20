import React from "react";
import { Link } from "react-router-dom";
import "./InterviewResource.css";

export default function TechnicalQuestions() {
  return (
    <div className="interview-resource-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="interview-hero">
        <h1>
          Technical <span>Questions</span>
        </h1>

        <p>
          Important technical interview questions from programming, DBMS, OS,
          CN, DSA and AI/ML.
        </p>
      </div>

      <div className="interview-grid">
        <div className="interview-card">
          <h2>Programming Questions</h2>
          <p>What is a variable?</p>
          <p>What is a function?</p>
          <p>Difference between array and string.</p>
          <p>What is recursion?</p>
          <p>Explain call by value and call by reference.</p>
        </div>

        <div className="interview-card">
          <h2>OOP Questions</h2>
          <p>What is Object Oriented Programming?</p>
          <p>Explain class and object.</p>
          <p>What is inheritance?</p>
          <p>What is polymorphism?</p>
          <p>What is encapsulation?</p>
        </div>

        <div className="interview-card">
          <h2>DBMS Questions</h2>
          <p>What is DBMS?</p>
          <p>What is primary key?</p>
          <p>What is foreign key?</p>
          <p>Difference between SQL and NoSQL.</p>
          <p>What is normalization?</p>
        </div>

        <div className="interview-card">
          <h2>DSA Questions</h2>
          <p>What is array?</p>
          <p>What is linked list?</p>
          <p>Difference between stack and queue.</p>
          <p>What is binary search?</p>
          <p>Explain time complexity.</p>
        </div>

        <div className="interview-card">
          <h2>OS and CN Questions</h2>
          <p>What is operating system?</p>
          <p>What is process and thread?</p>
          <p>What is deadlock?</p>
          <p>What is IP address?</p>
          <p>Difference between TCP and UDP.</p>
        </div>

        <div className="interview-card">
          <h2>AI/ML Questions</h2>
          <p>What is Artificial Intelligence?</p>
          <p>What is Machine Learning?</p>
          <p>Difference between AI and ML.</p>
          <p>What is supervised learning?</p>
          <p>What is model training?</p>
        </div>
      </div>
    </div>
  );
}