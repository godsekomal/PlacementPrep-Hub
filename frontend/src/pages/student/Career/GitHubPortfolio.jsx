import React from "react";
import { Link } from "react-router-dom";
import "./CareerResource.css";

export default function GitHubPortfolio() {
  return (
    <div className="career-resource-page">
      <Link to="/resources" className="back-link">← Back</Link>

      <div className="career-hero">
        <h1>GitHub <span>Portfolio Tips</span></h1>
        <p>Build a clean GitHub profile to showcase your coding and project work.</p>
      </div>

      <div className="career-grid">
        <div className="career-card">
          <h2>Profile Setup</h2>
          <p>Add a profile README.</p>
          <p>Write a short introduction about yourself.</p>
          <p>Mention your tech stack and interests.</p>
          <p>Keep your profile clean and updated.</p>
        </div>

        <div className="career-card">
          <h2>Repository Tips</h2>
          <p>Add meaningful project names.</p>
          <p>Write proper README files.</p>
          <p>Add screenshots or demo steps.</p>
          <p>Mention tools and technologies used.</p>
        </div>

        <div className="career-card">
          <h2>Project Documentation</h2>
          <p>Explain project objective.</p>
          <p>Add installation steps.</p>
          <p>Add features and output screenshots.</p>
          <p>Keep code organized in folders.</p>
        </div>

        <div className="career-card">
          <h2>Checklist</h2>
          <p>Profile README</p>
          <p>5+ Projects</p>
          <p>Proper Project Description</p>
          <p>Screenshots Added</p>
          <p>Regular Commits</p>
        </div>
      </div>
    </div>
  );
}