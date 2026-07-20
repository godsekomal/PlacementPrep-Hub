// src/pages/student/PieChart.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PieChart.css";
import axiosInstance from "../../utils/axiosInstance";
export default function PieChart() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "A pie chart shows 25% students like cricket out of 200. Find students.",
      options: ["40", "45", "50", "60"],
      answer: "50",
    },

    {
      question:
        "40% of a pie chart represents food expenses of ₹5000. Total income?",
      options: ["₹10000", "₹12000", "₹12500", "₹15000"],
      answer: "₹12500",
    },

    {
      question:
        "30% of students chose Science from 300 students. Find students.",
      options: ["70", "80", "90", "100"],
      answer: "90",
    },

    {
      question:
        "Pie chart shows 20% employees are managers from 250 employees. Find managers.",
      options: ["40", "45", "50", "60"],
      answer: "50",
    },

    {
      question:
        "50% of a pie chart is 180 degrees. Remaining degrees?",
      options: ["90", "120", "150", "180"],
      answer: "180",
    },

    {
      question:
        "15% of total expenses equals ₹3000. Find total expenses.",
      options: ["₹18000", "₹19000", "₹20000", "₹22000"],
      answer: "₹20000",
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
      topic: "Pie Chart",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};

  return (
    <div className="piechart-page">

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

        <span> / Pie Chart</span>

      </div>

      <div className="piechart-hero">

        <h1>
          Pie <span>Chart</span>
        </h1>

        <p>
          Pie Chart questions improve percentage calculations and analytical
          thinking skills. It helps students interpret circular data
          representation quickly in aptitude exams.
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
              ? "Excellent! You have good understanding of Pie Chart."
              : "Keep practicing Pie Chart questions."}
          </p>

        </div>
      )}
    </div>
  );
}