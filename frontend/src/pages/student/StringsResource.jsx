import React from "react";
import { Link } from "react-router-dom";
import "./DSAResource.css";

export default function StringsResource() {
  return (
    <div className="dsa-resource-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="dsa-hero">
        <h1>
          Strings <span>Resource</span>
        </h1>

        <p>
          Learn string operations, manipulation techniques and frequently asked
          interview questions.
        </p>
      </div>

      <div className="dsa-grid">
        <div className="dsa-card">
          <h2>Definition</h2>
          <p>
            A string is a sequence of characters used to store and process text
            data.
          </p>
        </div>

        <div className="dsa-card">
          <h2>Common Operations</h2>
          <p>Concatenation</p>
          <p>Substring</p>
          <p>Reverse String</p>
          <p>Character Count</p>
          <p>Pattern Matching</p>
        </div>

        <div className="dsa-card">
          <h2>Important Concepts</h2>
          <p>Palindrome Check</p>
          <p>Anagram Check</p>
          <p>String Compression</p>
          <p>Frequency Counting</p>
          <p>Longest Substring</p>
        </div>

        <div className="dsa-card">
          <h2>Interview Questions</h2>
          <p>Check palindrome string.</p>
          <p>Find duplicate characters.</p>
          <p>Count vowels and consonants.</p>
          <p>Reverse words in a sentence.</p>
          <p>Check two strings are anagrams.</p>
        </div>

        <div className="dsa-card">
          <h2>Example Code</h2>

          <pre className="code-box">
{`const str = "Placement";

const reversed =
  str.split("").reverse().join("");

console.log(reversed);`}
          </pre>
        </div>
      </div>
    </div>
  );
}