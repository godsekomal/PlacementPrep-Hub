import React from "react";
import { Link } from "react-router-dom";
import "./ResumeTips.css";

export default function ResumeTips() {
  return (
    <div className="resume-page">

      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <div className="resume-hero">
        <h1>
          Resume Builder <span>Tips</span>
        </h1>

        <p>
          Create a professional ATS-friendly resume for internships and
          placements.
        </p>
      </div>

      <div className="resume-container">

        <div className="resume-content">

          <div className="resume-card">
            <h2>Resume Format</h2>

            <ul>
              <li>Contact Details</li>
              <li>Career Objective</li>
              <li>Education</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Internship</li>
              <li>Certifications</li>
            </ul>
          </div>

          <div className="resume-card">
            <h2>ATS Resume Tips</h2>

            <ul>
              <li>ATS = Applicant Tracking System</li>
              <li>Use Simple Layout</li>
              <li>Avoid Tables & Images</li>
              <li>Use Relevant Keywords</li>
              <li>Save Resume in PDF</li>
              <li>Use Correct Headings</li>
            </ul>
          </div>

          <div className="resume-card">
            <h2>Project Description Tips</h2>

            <ul>
              <li>Mention Problem Statement</li>
              <li>Add Technologies Used</li>
              <li>Explain Your Role</li>
              <li>Highlight Features</li>
              <li>Mention Outcome</li>
            </ul>
          </div>

          <div className="resume-card">
            <h2>Common Mistakes</h2>

            <ul>
              <li>Spelling Errors</li>
              <li>Too Many Colors</li>
              <li>Fake Skills</li>
              <li>Long Paragraphs</li>
              <li>Missing Project Details</li>
            </ul>
          </div>

        </div>

        <div className="resume-checklist">

          <h2>Resume Checklist</h2>

          <p>✓ Contact Details Added</p>
          <p>✓ Professional Objective</p>
          <p>✓ Education Updated</p>
          <p>✓ Technical Skills Added</p>
          <p>✓ Projects Added</p>
          <p>✓ Internship Added</p>
          <p>✓ Certifications Added</p>
          <p>✓ ATS Friendly Format</p>
          <p>✓ PDF Format</p>

        </div>

      </div>

      <div className="sample-resume">

        <h2>Sample Resume Section Format</h2>

        <div className="sample-box">

          <h3>Career Objective</h3>

          <p>
            To obtain a challenging opportunity where I can apply my technical
            skills, gain practical experience and contribute to organizational
            growth.
          </p>

          <h3>Technical Skills</h3>

          <p>
            Python, Java, React, SQL, HTML, CSS, JavaScript, Machine Learning,
            Data Structures & Algorithms
          </p>

          <h3>Project</h3>

          <p>
            Smart Placement Hub – A placement preparation platform that
            provides aptitude practice, mock interviews, AI feedback and
            placement resources.
          </p>

        </div>

      </div>

    </div>
  );
}