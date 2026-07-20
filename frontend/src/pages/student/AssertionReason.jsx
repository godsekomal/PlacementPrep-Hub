// src/pages/student/AssertionReason.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AssertionReason.css";
import axiosInstance from "../../utils/axiosInstance";
export default function AssertionReason() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Assertion: Plants are important. Reason: Plants give oxygen.",
      options: [
        "Both true",
        "Only assertion true",
        "Only reason true",
        "Both false"
      ],
      answer: "Both true",
    },

    {
      question:
        "Assertion: Students should practice aptitude daily. Reason: Practice improves speed.",
      options: [
        "Both true",
        "Only assertion true",
        "Only reason true",
        "Both false"
      ],
      answer: "Both true",
    },

    {
      question:
        "Assertion: Smoking is harmful. Reason: It affects lungs.",
      options: [
        "Both true",
        "Only assertion true",
        "Only reason true",
        "Both false"
      ],
      answer: "Both true",
    },

    {
      question:
        "Assertion: Exercise keeps body fit. Reason: Exercise improves health.",
      options: [
        "Both true",
        "Only assertion true",
        "Only reason true",
        "Both false"
      ],
      answer: "Both true",
    },

    {
      question:
        "Assertion: Rainfall helps farmers. Reason: Crops need water.",
      options: [
        "Both true",
        "Only assertion true",
        "Only reason true",
        "Both false"
      ],
      answer: "Both true",
    },

    {
      question:
        "Assertion: Reading books improves knowledge. Reason: Books contain information.",
      options: [
        "Both true",
        "Only assertion true",
        "Only reason true",
        "Both false"
      ],
      answer: "Both true",
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
      topic: "Assertion and Reason",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};

  return (
    <div className="assertion-page">

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / </span>

        <Link to="/verbal-reasoning" className="home-link">
          Verbal Reasoning
        </Link>

        <span> / Assertion and Reason</span>

      </div>

      <div className="assertion-hero">

        <h1>
          Assertion & <span>Reason</span>
        </h1>

        <p>
          Assertion and Reason questions improve logical thinking and help
          students analyze statements and reasons effectively in placement exams.
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
              ? "Excellent! You have good understanding of Assertion & Reason."
              : "Keep practicing Assertion & Reason questions."}
          </p>

        </div>
      )}
    </div>
  );
}