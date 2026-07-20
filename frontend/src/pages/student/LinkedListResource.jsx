import React from "react";
import { Link } from "react-router-dom";
import "./DSAResource.css";

export default function LinkedListResource() {
  return (
    <div className="dsa-resource-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="dsa-hero">
        <h1>
          Linked List <span>Resource</span>
        </h1>

        <p>
          Learn linked list concepts, types, operations and common interview
          questions.
        </p>
      </div>

      <div className="dsa-grid">
        <div className="dsa-card">
          <h2>Definition</h2>
          <p>
            A linked list is a linear data structure where elements are stored
            in nodes and each node points to the next node.
          </p>
        </div>

        <div className="dsa-card">
          <h2>Types</h2>
          <p>Singly Linked List</p>
          <p>Doubly Linked List</p>
          <p>Circular Linked List</p>
        </div>

        <div className="dsa-card">
          <h2>Basic Operations</h2>
          <p>Insertion</p>
          <p>Deletion</p>
          <p>Traversal</p>
          <p>Searching</p>
          <p>Reverse Linked List</p>
        </div>

        <div className="dsa-card">
          <h2>Interview Questions</h2>
          <p>Find middle node.</p>
          <p>Reverse a linked list.</p>
          <p>Detect loop in linked list.</p>
          <p>Merge two sorted linked lists.</p>
        </div>

        <div className="dsa-card">
          <h2>Example Code</h2>

          <pre className="code-box">
{`class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const first = new Node(10);
const second = new Node(20);

first.next = second;

console.log(first.data);`}
          </pre>
        </div>
      </div>
    </div>
  );
}