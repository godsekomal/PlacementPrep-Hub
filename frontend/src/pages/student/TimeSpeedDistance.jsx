// src/pages/student/TimeSpeedDistance.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TimeSpeedDistance.css";
import axiosInstance from "../../utils/axiosInstance";
export default function TimeSpeedDistance() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "A car travels 240 km in 4 hours. Find the speed.",
      options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
      answer: "60 km/h",
    },

    {
      question:
        "A train moving at 80 km/h covers a distance in 5 hours. Find the distance.",
      options: ["300 km", "350 km", "400 km", "450 km"],
      answer: "400 km",
    },

    {
      question:
        "A person walks 15 km in 3 hours. Find the speed.",
      options: ["3 km/h", "4 km/h", "5 km/h", "6 km/h"],
      answer: "5 km/h",
    },

    {
      question:
        "A bus covers 360 km at 60 km/h. Find the time taken.",
      options: ["4 hrs", "5 hrs", "6 hrs", "7 hrs"],
      answer: "6 hrs",
    },

    {
      question:
        "If speed increases, the time taken to travel the same distance will:",
      options: ["Increase", "Decrease", "Remain same", "Double"],
      answer: "Decrease",
    },

    {
      question:
        "A cyclist covers 90 km in 3 hours. Find the average speed.",
      options: ["20 km/h", "25 km/h", "30 km/h", "35 km/h"],
      answer: "30 km/h",
    },
  ];

  const handleOptionClick = (questionIndex, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: option,
    });
  };

  const handleViewAnswer = (questionIndex) => {
    setShowAnswers({
      ...showAnswers,
      [questionIndex]: true,
    });
  };
const handleSubmitTest = async () => {
  let score = 0;

  questions.forEach((q, index) => {
    if (selectedAnswers[index] === q.answer) {
      score++;
    }
  });

  setFinalScore(score);

  try {
    await axiosInstance.post("/api/aptitude-feedback/save", {
      topic: "Time, Speed and Distance",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="tsd-page">

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Time, Speed and Distance</span>

      </div>

      <div className="tsd-hero">

        <h1>
          Time, Speed & <span>Distance</span>
        </h1>

        <p>
          Time, Speed and Distance is an important aptitude topic used in
          placement exams. It helps students solve questions related to motion,
          travelling speed, distance covered and time calculations quickly.
        </p>

      </div>

      <div className="questions-section">

        {questions.map((q, index) => (

          <div className="question-card" key={index}>

            <h2>
              Q{index + 1}. {q.question}
            </h2>

            <div className="options-grid">

              {q.options.map((option, i) => {

                const selected = selectedAnswers[index] === option;
                const correct = option === q.answer;

                return (
                  <div
                    key={i}
                    className={`option-box
                      ${selected && correct ? "correct" : ""}
                      ${selected && !correct ? "wrong" : ""}
                    `}
                    onClick={() =>
                      handleOptionClick(index, option)
                    }
                  >

                    <div className="option-circle">
                      {String.fromCharCode(65 + i)}
                    </div>

                    <span>{option}</span>

                  </div>
                );
              })}

            </div>

            <button
              className="answer-btn"
              onClick={() => handleViewAnswer(index)}
            >
              View Answer
            </button>

            {showAnswers[index] && (
              <p className="correct-answer">
                Correct Answer: {q.answer}
              </p>
            )}

          </div>

        ))}

      </div>
      <button
        className="submit-test-btn"
        onClick={handleSubmitTest}
      >
        Submit Test
      </button>

      {finalScore !== null && (
        <div className="score-card">

          <h2>
            Your Score: {finalScore} / {questions.length}
          </h2>

          <p>
            {finalScore >= 4
              ? "Excellent! You have good understanding of Time, Speed & Distance"
              : "Keep practicing Time, Speed & Distance."}
          </p>

        </div>
      )}
    </div>
  );
}