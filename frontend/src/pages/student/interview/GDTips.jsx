import React from "react";
import { Link } from "react-router-dom";
import "./InterviewResource.css";

export default function GDTips() {
  return (
    <div className="interview-resource-page">
      <Link to="/resources" className="back-link">
        ← Back
      </Link>

      <div className="interview-hero">
        <h1>
          Group Discussion <span>Tips</span>
        </h1>

        <p>
          Learn GD rules, common topics and answer points to express your
          thoughts clearly and confidently.
        </p>
      </div>

      <div className="interview-grid">
        <div className="interview-card">
          <h2>What is GD Round?</h2>
          <p>
            Group Discussion is a recruitment round where candidates discuss a
            given topic and share their views in a group.
          </p>
          <p>
            It usually checks communication, confidence, listening, leadership
            and critical thinking skills.
          </p>
        </div>

        <div className="interview-card">
          <h2>GD Checks Your</h2>
          <p>Communication Skills</p>
          <p>Critical Thinking</p>
          <p>Interactive Skills</p>
          <p>Leadership Skills</p>
          <p>Listening Skills</p>
          <p>Confidence</p>
          <p>Knowledge</p>
        </div>

        <div className="interview-card">
          <h2>GD Rules</h2>
          <p>Give everyone a chance to speak.</p>
          <p>Respect other participants.</p>
          <p>Criticize ideas, not people.</p>
          <p>Do not interrupt aggressively.</p>
          <p>Support your points with examples.</p>
        </div>

        <div className="interview-card">
          <h2>GD Preparation Tips</h2>
          <p>Read current affairs regularly.</p>
          <p>Prepare common social and abstract topics.</p>
          <p>Practice speaking for 1 minute on any topic.</p>
          <p>Use simple and clear language.</p>
          <p>Listen carefully before responding.</p>
        </div>

        <div className="interview-card">
          <h2>Abstract Topics</h2>
          <p>Is it possible for AI to replace humans?</p>
          <p>Hard Work versus Smart Work</p>
          <p>Money or Happiness</p>
          <p>Impact of Technology on Jobs</p>
          <p>Do deadlines destroy creativity?</p>
          <p>Pros and Cons of E-learning</p>
        </div>

        <div className="interview-card">
          <h2>Social Issue Topics</h2>
          <p>Gender equality in the workplace</p>
          <p>Pros and Cons of Social Media</p>
          <p>Crimes against Women</p>
          <p>Covid-19 and the Environment</p>
          <p>Is caste based reservation good or bad?</p>
        </div>

        <div className="interview-card">
          <h2>Current Affairs Topics</h2>
          <p>Pros and Cons of Cashless Economy</p>
          <p>Demonetization: Success and Failures</p>
          <p>Citizenship Amendment Act</p>
          <p>Farm Bills</p>
          <p>Importance of Statue of Unity</p>
        </div>

        <div className="interview-card">
          <h2>Sample Answer Points</h2>
          <p>
            For AI replacing humans, mention that AI can automate repetitive
            tasks but human creativity, emotions and decision-making are still
            important.
          </p>
          <p>
            For social media, mention both benefits like connectivity and risks
            like addiction, fake news and privacy issues.
          </p>
          <p>
            For hard work vs smart work, explain that both are important and
            smart planning makes hard work more effective.
          </p>
        </div>
      </div>
    </div>
  );
}