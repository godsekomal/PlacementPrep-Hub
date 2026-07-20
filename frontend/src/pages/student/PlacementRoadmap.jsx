import React from "react";
import { Link } from "react-router-dom";
import "./PlacementRoadmap.css";

export default function PlacementRoadmap() {
  const roadmaps = [
    {
      title: "After 12th Roadmap",
      subtitle: "Choose the right path after 12th and prepare for your future.",
      theme: "green",
      steps: [
        ["12th Pass", "Focus on exams and explore career options"],
        ["Choose Degree", "B.Tech, BCA, B.Sc IT/CS or other courses"],
        ["Programming Basics", "Start with C, Python or Java"],
        ["Communication Skills", "Improve English and confidence"],
        ["Projects", "Build academic and personal projects"],
        ["Internship", "Get internship experience"],
        ["Placement Preparation", "Aptitude, Technical and HR preparation"],
        ["Job / Higher Studies", "Apply for jobs or go for higher education"],
      ],
    },
    {
      title: "After Diploma Roadmap",
      subtitle: "Step-by-step path to get placed after Diploma.",
      theme: "purple",
      steps: [
        ["Semester 1-2", "Understand basics and focus on academics"],
        ["Programming Basics", "Learn C, C++ and OOP concepts"],
        ["Aptitude Skills", "Quantitative, Reasoning and Verbal Ability"],
        ["Mini Projects", "Build small projects to improve skills"],
        ["Internship", "Apply for internships and gain experience"],
        ["Resume & LinkedIn", "Create ATS-friendly resume and profile"],
        ["Placement Preparation", "Aptitude, Technical, HR and GD"],
        ["Job Offer", "Appear in placement drives and get placed"],
      ],
    },
    
    {
      title: "Engineering Roadmap",
      subtitle: "Complete roadmap from First Year to Placement.",
      theme: "blue",
      steps: [
        ["First Year", "Learn C, C++, Python and build fundamentals"],
        ["Programming Fundamentals", "OOP concepts and data structures basics"],
        ["DSA + Core Subjects", "DSA, DBMS, OS, CN and OOPs"],
        ["Projects", "Build real-world projects and use GitHub"],
        ["Internship", "Do internship and gain industry experience"],
        ["Aptitude", "Quantitative, Reasoning and Verbal Ability"],
        ["Interview Preparation", "Technical, HR, GD and puzzles"],
        ["Placement Drive", "Apply and perform well in interviews"],
        ["Job Offer", "Get your dream job and start your career"],
      ],
    },
  ];

  const tips = [
    "Be consistent",
    "Build projects",
    "Practice regularly",
    "Stay updated",
    "Network",
    "Stay positive",
  ];

  return (
    <div className="roadmap-page">
      <Link to="/" className="roadmap-back">
        ← Back
      </Link>

      <div className="roadmap-hero">
        <span>PLAN • PREPARE • SUCCEED</span>
        <h1>
          Placement <b>Roadmap</b>
        </h1>
        <p>
          Choose your educational path and follow the right steps to build your
          career.
        </p>
      </div>

      {roadmaps.map((roadmap, index) => (
        <section className={`roadmap-section ${roadmap.theme}`} key={index}>
          <div className="roadmap-title">
            <h2>
              {index + 1}. {roadmap.title}
            </h2>
            <p>{roadmap.subtitle}</p>
          </div>

          <div className="timeline">
            {roadmap.steps.map((step, i) => (
              <div className="timeline-step" key={i}>
                <div className="step-number">{i + 1}</div>
                <div className="step-box">
                  <h3>{step[0]}</h3>
                  <p>{step[1]}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="detail-grid">
            {roadmap.steps.map((step, i) => (
              <div className="detail-card" key={i}>
                <h3>{step[0]}</h3>
                <p>{step[1]}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="tips-section">
        <h2>General Tips for All Students</h2>

        <div className="tips-grid">
          {tips.map((tip, index) => (
            <div className="tip-card" key={index}>
              <h3>{tip}</h3>
              <p>
                Follow this step regularly to improve your placement readiness
                and confidence.
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="quote-box">
        A good plan today leads to a great placement tomorrow.
      </div>
    </div>
  );
}