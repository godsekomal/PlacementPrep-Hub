// src/pages/student/ProfitLoss.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import "./ProfitLoss.css";

export default function ProfitLoss() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "A shopkeeper bought a bag for ₹800 and sold it for ₹1000. Find the profit.",
      options: ["₹100", "₹150", "₹200", "₹250"],
      answer: "₹200",
    },

    {
      question:
        "A mobile was bought for ₹12000 and sold for ₹10800. Find the loss percentage.",
      options: ["5%", "8%", "10%", "12%"],
      answer: "10%",
    },

    {
      question:
        "A person sells a watch for ₹1500 making a profit of ₹300. Find the cost price.",
      options: ["₹1000", "₹1100", "₹1200", "₹1300"],
      answer: "₹1200",
    },

    {
      question:
        "A trader buys an item for ₹500 and sells it at 20% profit. Find the selling price.",
      options: ["₹550", "₹580", "₹600", "₹620"],
      answer: "₹600",
    },

    {
      question:
        "A product was sold for ₹900 at a loss of ₹100. Find the cost price.",
      options: ["₹950", "₹1000", "₹1050", "₹1100"],
      answer: "₹1000",
    },

    {
      question:
        "A laptop bought for ₹40000 was sold at ₹46000. Find the profit percentage.",
      options: ["10%", "12%", "15%", "18%"],
      answer: "15%",
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
      topic: "Profit and Loss",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};

  return (
    <div className="profit-page">

      {/* BREADCRUMB */}

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Profit and Loss</span>

      </div>

      {/* HERO */}

      <div className="profit-hero">

        <h1>
  Profit & <span>Loss</span>
</h1>

        <p>
          Profit and Loss is an important aptitude topic used in placement
          exams. It helps students solve questions related to selling price,
          cost price, discounts and percentage gain or loss with faster
          calculations.
        </p>

      </div>

      {/* QUESTIONS */}

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
              ? "Excellent! You have good understanding of Profit & Loss."
              : "Keep practicing Profit & Loss questions."}
          </p>

        </div>
      )}

    </div>
  );
}