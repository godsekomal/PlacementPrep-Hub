import React from "react";
import { Link } from "react-router-dom";
import "./DSAResource.css";

export default function StackQueueResource() {
  return (
    <div className="dsa-resource-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="dsa-hero">
        <h1>
          Stack & Queue <span>Resource</span>
        </h1>

        <p>
          Learn stack and queue concepts, operations and important interview
          questions.
        </p>
      </div>

      <div className="dsa-grid">
        <div className="dsa-card">
          <h2>Stack Definition</h2>
          <p>
            Stack is a linear data structure that follows LIFO principle: Last
            In First Out.
          </p>
        </div>

        <div className="dsa-card">
          <h2>Queue Definition</h2>
          <p>
            Queue is a linear data structure that follows FIFO principle: First
            In First Out.
          </p>
        </div>

        <div className="dsa-card">
          <h2>Stack Operations</h2>
          <p>Push</p>
          <p>Pop</p>
          <p>Peek</p>
          <p>isEmpty</p>
        </div>

        <div className="dsa-card">
          <h2>Queue Operations</h2>
          <p>Enqueue</p>
          <p>Dequeue</p>
          <p>Front</p>
          <p>Rear</p>
        </div>

        <div className="dsa-card">
          <h2>Interview Questions</h2>
          <p>Balanced parentheses.</p>
          <p>Next greater element.</p>
          <p>Queue using stacks.</p>
          <p>Stack using queues.</p>
        </div>

        <div className="dsa-card">
          <h2>Example Code</h2>

          <pre className="code-box">
{`const stack = [];

stack.push(10);
stack.push(20);

console.log(stack.pop());`}
          </pre>
        </div>
      </div>
    </div>
  );
}