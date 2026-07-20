import React from "react";
import { Link } from "react-router-dom";
import "./DSAResource.css";

export default function ArraysResource() {
  return (
    <div className="dsa-resource-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="dsa-hero">
        <h1>
          Arrays <span>Resource</span>
        </h1>

        <p>
          Learn array basics, operations and common interview questions.
        </p>
      </div>

      <div className="dsa-grid">
        <div className="dsa-card">
          <h2>Definition</h2>
          <p>
            An array is a linear data structure used to store multiple values
            of the same type in continuous memory locations.
          </p>
        </div>

        <div className="dsa-card">
          <h2>Why It Is Used</h2>
          <p>Arrays are used to store and access data quickly using indexes.</p>
        </div>

        <div className="dsa-card">
          <h2>Basic Operations</h2>
          <p>Traversal</p>
          <p>Insertion</p>
          <p>Deletion</p>
          <p>Searching</p>
          <p>Sorting</p>
        </div>

        <div className="dsa-card">
          <h2>Common Interview Questions</h2>
          <p>Find maximum and minimum element.</p>
          <p>Reverse an array.</p>
          <p>Find duplicate elements.</p>
          <p>Find second largest element.</p>
          <p>Two Sum problem.</p>
        </div>

        <div className="dsa-card">
          <h2>Example Code</h2>

          <pre className="code-box">
{`const arr = [10, 20, 30, 40];

arr.forEach((value) => {
  console.log(value);
});`}
          </pre>
        </div>
      </div>
    </div>
  );
}