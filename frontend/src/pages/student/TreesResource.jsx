import React from "react";
import { Link } from "react-router-dom";
import "./DSAResource.css";

export default function TreesResource() {
  return (
    <div className="dsa-resource-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="dsa-hero">
        <h1>
          Trees <span>Resource</span>
        </h1>

        <p>
          Learn tree basics, binary tree, BST, traversals and common interview
          questions.
        </p>
      </div>

      <div className="dsa-grid">
        <div className="dsa-card">
          <h2>Definition</h2>
          <p>
            A tree is a non-linear data structure made of nodes connected by
            edges. It represents hierarchical data.
          </p>
        </div>

        <div className="dsa-card">
          <h2>Important Terms</h2>
          <p>Root Node</p>
          <p>Parent Node</p>
          <p>Child Node</p>
          <p>Leaf Node</p>
          <p>Height of Tree</p>
        </div>

        <div className="dsa-card">
          <h2>Types of Trees</h2>
          <p>Binary Tree</p>
          <p>Binary Search Tree</p>
          <p>AVL Tree</p>
          <p>Heap Tree</p>
        </div>

        <div className="dsa-card">
          <h2>Tree Traversals</h2>
          <p>Inorder Traversal</p>
          <p>Preorder Traversal</p>
          <p>Postorder Traversal</p>
          <p>Level Order Traversal</p>
        </div>

        <div className="dsa-card">
          <h2>Interview Questions</h2>
          <p>Find height of binary tree.</p>
          <p>Search an element in BST.</p>
          <p>Find minimum and maximum in BST.</p>
          <p>Print inorder traversal.</p>
        </div>

        <div className="dsa-card">
          <h2>Example Code</h2>

          <pre className="code-box">
{`class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);

console.log(root.data);`}
          </pre>
        </div>
      </div>
    </div>
  );
}