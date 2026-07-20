import React from "react";
import { Link } from "react-router-dom";
import "./DSAResource.css";

export default function SortingResource() {
  return (
    <div className="dsa-resource-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="dsa-hero">
        <h1>
          Sorting <span>Resource</span>
        </h1>

        <p>
          Learn sorting algorithms, their use cases, time complexity and common
          interview questions.
        </p>
      </div>

      <div className="dsa-grid">
        <div className="dsa-card">
          <h2>Definition</h2>
          <p>
            Sorting is the process of arranging data in a particular order,
            usually ascending or descending.
          </p>
        </div>

        <div className="dsa-card">
          <h2>Sorting Algorithms</h2>
          <p>Bubble Sort</p>
          <p>Selection Sort</p>
          <p>Insertion Sort</p>
          <p>Merge Sort</p>
          <p>Quick Sort</p>
        </div>

        <div className="dsa-card">
          <h2>Time Complexity</h2>
          <p>Bubble Sort: O(n²)</p>
          <p>Selection Sort: O(n²)</p>
          <p>Insertion Sort: O(n²)</p>
          <p>Merge Sort: O(n log n)</p>
          <p>Quick Sort: O(n log n) average</p>
        </div>

        <div className="dsa-card">
          <h2>When To Use</h2>
          <p>Use Bubble Sort for learning basics.</p>
          <p>Use Merge Sort for stable sorting.</p>
          <p>Use Quick Sort for efficient average case sorting.</p>
          <p>Use Insertion Sort for small datasets.</p>
        </div>

        <div className="dsa-card">
          <h2>Interview Questions</h2>
          <p>Implement bubble sort.</p>
          <p>Implement selection sort.</p>
          <p>Find kth largest element.</p>
          <p>Sort array of 0s, 1s and 2s.</p>
        </div>

        <div className="dsa-card">
          <h2>Example Code</h2>

          <pre className="code-box">
{`const arr = [5, 2, 8, 1];

arr.sort((a, b) => a - b);

console.log(arr);`}
          </pre>
        </div>
      </div>
    </div>
  );
}