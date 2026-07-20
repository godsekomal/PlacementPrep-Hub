import React from "react";
import { Link } from "react-router-dom";
import "./DSAResource.css";

export default function GraphsResource() {
  return (
    <div className="dsa-resource-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="dsa-hero">
        <h1>
          Graphs <span>Resource</span>
        </h1>

        <p>
          Learn graph concepts, vertices, edges, BFS, DFS and important
          interview questions.
        </p>
      </div>

      <div className="dsa-grid">
        <div className="dsa-card">
          <h2>Definition</h2>
          <p>
            A graph is a non-linear data structure consisting of vertices and
            edges. It is used to represent networks.
          </p>
        </div>

        <div className="dsa-card">
          <h2>Basic Terms</h2>
          <p>Vertex</p>
          <p>Edge</p>
          <p>Path</p>
          <p>Cycle</p>
          <p>Degree</p>
        </div>

        <div className="dsa-card">
          <h2>Types of Graphs</h2>
          <p>Directed Graph</p>
          <p>Undirected Graph</p>
          <p>Weighted Graph</p>
          <p>Unweighted Graph</p>
        </div>

        <div className="dsa-card">
          <h2>Graph Traversals</h2>
          <p>BFS - Breadth First Search</p>
          <p>DFS - Depth First Search</p>
        </div>

        <div className="dsa-card">
          <h2>Interview Questions</h2>
          <p>Implement BFS traversal.</p>
          <p>Implement DFS traversal.</p>
          <p>Detect cycle in graph.</p>
          <p>Find shortest path in unweighted graph.</p>
        </div>

        <div className="dsa-card">
          <h2>Example Code</h2>

          <pre className="code-box">
{`const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A"],
  D: ["B"],
};

console.log(graph["A"]);`}
          </pre>
        </div>
      </div>
    </div>
  );
}