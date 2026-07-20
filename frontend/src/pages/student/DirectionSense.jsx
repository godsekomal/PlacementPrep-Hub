// src/pages/student/DirectionSense.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DirectionSense.css";
import axiosInstance from "../../utils/axiosInstance";
export default function DirectionSense() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Ravi walks 10m North and then turns right. Which direction is he facing?",
      options: ["North", "South", "East", "West"],
      answer: "East",
    },

    {
      question:
        "A person moves East then turns left. Which direction now?",
      options: ["North", "South", "West", "East"],
      answer: "North",
    },

    {
      question:
        "Maya walks South and turns right. Which direction is she facing?",
      options: ["East", "West", "North", "South"],
      answer: "West",
    },

    {
      question:
        "A man walks West then turns left. Which direction now?",
      options: ["South", "North", "East", "West"],
      answer: "South",
    },

    {
      question:
        "Rita walks North, then left. Which direction is she facing?",
      options: ["West", "East", "South", "North"],
      answer: "West",
    },

    {
      question:
        "A boy walks South and turns left. Which direction now?",
      options: ["East", "West", "North", "South"],
      answer: "East",
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
      topic: "Direction Sense",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="direction-page">

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / </span>

        <Link to="/logical-reasoning" className="home-link">
          Logical Reasoning
        </Link>

        <span> / Direction Sense</span>

      </div>

      <div className="direction-hero">

        <h1>
          Direction <span>Sense</span>
        </h1>

        <p>
          Direction Sense questions improve logical thinking and spatial
          understanding skills. It helps students solve direction-based
          reasoning problems quickly in placement exams.
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
              ? "Excellent! You have good understanding of Direction Sense."
              : "Keep practicing Direction sense questions."}
          </p>

        </div>
      )}
    </div>
  );
}