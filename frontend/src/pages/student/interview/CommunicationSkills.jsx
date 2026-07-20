import React from "react";
import { Link } from "react-router-dom";
import "./InterviewResource.css";

export default function CommunicationSkills() {
  return (
    <div className="interview-resource-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="interview-hero">
        <h1>
          Professional Communication <span>Skills</span>
        </h1>

        <p>
          Improve your speaking, listening, email writing and professional
          workplace communication.
        </p>
      </div>

      <div className="interview-grid">
        <div className="interview-card">
          <h2>Speaking Skills</h2>
          <p>Speak clearly and avoid rushing.</p>
          <p>Use simple and professional language.</p>
          <p>Structure answers in points.</p>
          <p>Use examples while explaining.</p>
          <p>Avoid filler words like umm and actually.</p>
        </div>

        <div className="interview-card">
          <h2>Listening Skills</h2>
          <p>Listen carefully before answering.</p>
          <p>Do not interrupt the speaker.</p>
          <p>Understand the question properly.</p>
          <p>Ask clarification politely if needed.</p>
          <p>Respond according to the situation.</p>
        </div>

        <div className="interview-card">
          <h2>Body Language</h2>
          <p>Maintain eye contact.</p>
          <p>Sit straight and confidently.</p>
          <p>Keep a positive facial expression.</p>
          <p>Avoid unnecessary hand movements.</p>
          <p>Show confidence but do not look overconfident.</p>
        </div>

       

        <div className="interview-card">
          <h2>Interview Communication</h2>
          <p>Answer in a calm and confident tone.</p>
          <p>Do not give one-word answers.</p>
          <p>Use STAR method for experience-based answers.</p>
          <p>Accept politely if you do not know something.</p>
          <p>Thank the interviewer at the end.</p>
        </div>

        <div className="interview-card">
          <h2>Professional Tips</h2>
          <p>Be respectful in every conversation.</p>
          <p>Use formal words in workplace communication.</p>
          <p>Be clear, concise and polite.</p>
          <p>Practice daily speaking for improvement.</p>
          <p>Improve vocabulary step by step.</p>
        </div>
      </div>
    </div>
  );
}