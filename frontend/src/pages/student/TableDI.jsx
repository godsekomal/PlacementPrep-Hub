// src/pages/student/TableDI.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TableDI.css";
import axiosInstance from "../../utils/axiosInstance";
export default function TableDI() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Table shows sales of 100, 200 and 300 units. Find total.",
      options: ["500", "550", "600", "650"],
      answer: "600",
    },

    {
      question:
        "Average marks of 4 students are 70. Find total marks.",
      options: ["260", "270", "280", "290"],
      answer: "280",
    },

    {
      question:
        "A table shows income ₹5000 and expenses ₹3500. Savings?",
      options: ["₹1000", "₹1200", "₹1500", "₹1800"],
      answer: "₹1500",
    },

    {
      question:
        "Find average of 20, 30, 40 and 50.",
      options: ["30", "35", "40", "45"],
      answer: "35",
    },

    {
      question:
        "A company sold 450 units in total over 3 months. Average sales?",
      options: ["100", "120", "150", "180"],
      answer: "150",
    },

    {
      question:
        "Total expenditure is ₹9000 for 3 categories equally. Each category expense?",
      options: ["₹2000", "₹2500", "₹3000", "₹3500"],
      answer: "₹3000",
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
      topic: "Table DI",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="tabledi-page">

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / </span>

        <Link to="/data-interpretation" className="home-link">
          Data Interpretation
        </Link>

        <span> / Table DI</span>

      </div>

      <div className="tabledi-hero">

        <h1>
          Table <span>DI</span>
        </h1>

        <p>
          Table DI questions help students analyze numerical data arranged in
          rows and columns. It improves calculation speed and analytical
          thinking required in placement aptitude exams.
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
              ? "Excellent! You have good understanding of Table DI."
              : "Keep practicing Table DI questions."}
          </p>

        </div>
      )}
    </div>
  );
}