// src/pages/student/SeatingArrangement.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SeatingArrangement.css";
import axiosInstance from "../../utils/axiosInstance";
export default function SeatingArrangement() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "A, B, C are sitting in a row. B is between A and C. Who is in middle?",
      options: ["A", "B", "C", "None"],
      answer: "B",
    },

    {
      question:
        "Five people sit in a row. Ravi sits at extreme left. Position?",
      options: ["Middle", "Right", "Left", "End"],
      answer: "Left",
    },

    {
      question:
        "If P sits right to Q, then Q sits:",
      options: ["Left of P", "Right of P", "Behind P", "Front of P"],
      answer: "Left of P",
    },

    {
      question:
        "A is sitting between B and C. Who is left of C?",
      options: ["A", "B", "D", "None"],
      answer: "A",
    },

    {
      question:
        "Rita sits second from left in a row of five. Position?",
      options: ["1st", "2nd", "3rd", "4th"],
      answer: "2nd",
    },

    {
      question:
        "If K is at extreme right, which position is occupied?",
      options: ["Middle", "Left", "Right", "Center"],
      answer: "Right",
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
      topic: "Seating Arrangement",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="seating-page">

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

        <span> / Seating Arrangement</span>

      </div>

      <div className="seating-hero">

        <h1>
          Seating <span>Arrangement</span>
        </h1>

        <p>
          Seating Arrangement questions help students improve logical analysis,
          positioning skills and arrangement solving techniques for placement
          aptitude exams.
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
              ? "Excellent! You have good understanding of Seating Arrangement."
              : "Keep practicing Seating Arragement questions."}
          </p>

        </div>
      )}
    </div>
  );
}