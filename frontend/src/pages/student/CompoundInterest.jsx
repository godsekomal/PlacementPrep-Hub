// src/pages/student/CompoundInterest.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CompoundInterest.css";
import axiosInstance from "../../utils/axiosInstance";
export default function CompoundInterest() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Find the compound interest on ₹5000 at 10% per annum for 2 years.",
      options: ["₹1000", "₹1050", "₹1100", "₹1200"],
      answer: "₹1050",
    },

    {
      question:
        "What will be the amount on ₹8000 at 5% compound interest for 2 years?",
      options: ["₹8600", "₹8820", "₹9000", "₹9200"],
      answer: "₹8820",
    },

    {
      question:
        "Find the compound interest on ₹10000 at 10% for 1 year.",
      options: ["₹900", "₹1000", "₹1100", "₹1200"],
      answer: "₹1000",
    },

    {
      question:
        "A sum amounts to ₹12100 in 2 years at 10% compound interest. Find the principal.",
      options: ["₹9000", "₹10000", "₹11000", "₹12000"],
      answer: "₹10000",
    },

    {
      question:
        "Find the amount on ₹6000 at 8% compound interest for 2 years.",
      options: ["₹6800", "₹6998.4", "₹7200", "₹7500"],
      answer: "₹6998.4",
    },

    {
      question:
        "The compound interest on ₹4000 for 2 years is ₹840. Find the rate.",
      options: ["8%", "10%", "12%", "15%"],
      answer: "10%",
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
      topic: "Compound Interest",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};

  return (
    <div className="ci-page">

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Compound Interest</span>

      </div>

      <div className="ci-hero">

        <h1>
          Compound <span>Interest</span>
        </h1>

        <p>
          Compound Interest is an important aptitude topic used in placement
          exams. It helps students solve questions related to amount,
          principal, rate and yearly growth calculations quickly and accurately.
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
              ? "Excellent! You have good understanding of Compound Interest"
              : "Keep practicing Compound Interest questions."}
          </p>

        </div>
      )}
    </div>
  );
}