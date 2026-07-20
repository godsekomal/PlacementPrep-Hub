// src/pages/student/SimpleInterest.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SimpleInterest.css";
import axiosInstance from "../../utils/axiosInstance";

export default function SimpleInterest() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Find the simple interest on ₹5000 at 10% per annum for 2 years.",
      options: ["₹500", "₹800", "₹1000", "₹1200"],
      answer: "₹1000",
    },

    {
      question:
        "A sum of ₹8000 earns ₹1600 as simple interest in 4 years. Find the rate of interest.",
      options: ["4%", "5%", "6%", "7%"],
      answer: "5%",
    },

    {
      question:
        "Find the amount when ₹6000 is invested at 8% simple interest for 3 years.",
      options: ["₹7200", "₹7400", "₹7440", "₹7600"],
      answer: "₹7440",
    },

    {
      question:
        "At what rate will ₹4000 amount to ₹4800 in 5 years under simple interest?",
      options: ["3%", "4%", "5%", "6%"],
      answer: "4%",
    },

    {
      question:
        "Find the simple interest on ₹9000 at 12% for 1 year.",
      options: ["₹980", "₹1000", "₹1080", "₹1200"],
      answer: "₹1080",
    },

    {
      question:
        "A sum becomes ₹6600 in 2 years at 10% simple interest. Find the principal.",
      options: ["₹5000", "₹5500", "₹6000", "₹6200"],
      answer: "₹5500",
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
      topic: "Simple Interest",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="si-page">

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Simple Interest</span>

      </div>

      <div className="si-hero">

        <h1>
          Simple <span>Interest</span>
        </h1>

        <p>
          Simple Interest is an important aptitude topic used in placement
          exams. It helps students solve questions related to principal,
          amount, rate of interest and time-based calculations quickly.
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
              ? "Excellent! You have good understanding of Simple Interest"
              : "Keep practicing Simple Interest questions."}
          </p>

        </div>
      )}
    </div>
  );
}