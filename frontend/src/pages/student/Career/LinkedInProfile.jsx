import React from "react";
import { Link } from "react-router-dom";
import "./CareerResource.css";

export default function LinkedInProfile() {
  return (
    <div className="career-resource-page">
      <Link to="/resources" className="back-link">← Back</Link>

      <div className="career-hero">
        <h1>LinkedIn <span>Profile Optimization</span></h1>
        <p>Improve your LinkedIn profile to attract recruiters and placement opportunities.</p>
      </div>

      <div className="career-grid">
        <div className="career-card">
          <h2>Profile Setup</h2>
          <p>Use a professional profile photo.</p>
          <p>Add a clear headline with your role and skills.</p>
          <p>Update education details properly.</p>
          <p>Create a custom LinkedIn URL.</p>
        </div>

        <div className="career-card">
          <h2>About Section</h2>
          <p>Write a short summary about your education, skills and interests.</p>
          <p>Mention projects, internship and career goal.</p>
          <p>Keep language simple and professional.</p>
        </div>

        <div className="career-card">
          <h2>Skills & Projects</h2>
          <p>Add technical skills like Python, React, ML, DBMS and DSA.</p>
          <p>Add project title, description and technologies used.</p>
          <p>Add certifications and achievements.</p>
        </div>

        <div className="career-card">
          <h2>Checklist</h2>
          <p>Professional Photo</p>
          <p>Clear Headline</p>
          <p>Updated Education</p>
          <p>Projects Added</p>
          <p>Skills Added</p>
        </div>
      </div>
    </div>
  );
}