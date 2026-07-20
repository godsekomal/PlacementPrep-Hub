// src/pages/student/Percentage.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import "./Percentage.css";

export default function Percentage() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [finalScore, setFinalScore] = useState(null);

  const questions = [
    {
      question:
        "A student scored 420 marks out of 600. Find the percentage obtained.",
      options: ["60%", "70%", "75%", "80%"],
      answer: "70%",
    },
    {
      question: "What is 25% of 480?",
      options: ["100", "110", "120", "130"],
      answer: "120",
    },
    {
      question:
        "The price of a product increased from ₹800 to ₹920. Find the percentage increase.",
      options: ["10%", "12%", "15%", "20%"],
      answer: "15%",
    },
    {
      question:
        "A shopkeeper gives a discount of 15% on a shirt worth ₹2000. Find the discount amount.",
      options: ["₹250", "₹300", "₹350", "₹400"],
      answer: "₹300",
    },
    {
      question: "If 40% of a number is 320, then find the number.",
      options: ["700", "750", "800", "850"],
      answer: "800",
    },
    {
      question:
        "In a class of 120 students, 75% are present. How many students are absent?",
      options: ["20", "25", "30", "35"],
      answer: "30",
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
        topic: "Percentage",
        score,
        totalQuestions: questions.length,
        percentage: (score / questions.length) * 100,
      });
    } catch (error) {
      console.log("Score save error:", error);
    }
  };

  return (
    <div className="percentage-page">
      <div className="breadcrumb">
        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Percentage</span>
      </div>

      <div className="percentage-hero">
        <h1>
          Percentage <span>Practice</span>
        </h1>

        <p>
          Percentage is one of the most important topics in quantitative
          aptitude. It helps students solve problems related to profit and
          loss, discounts, averages and data interpretation.
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
                    onClick={() => handleOptionClick(index, option)}
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

      <button className="submit-test-btn" onClick={handleSubmitTest}>
        Submit Test
      </button>

      {finalScore !== null && (
        <div className="score-card">
          <h2>
            Your Score: {finalScore} / {questions.length}
          </h2>

          <p>
            {finalScore >= 4
              ? "Great job! You are doing well in Percentage."
              : "Keep practicing. You need more practice in Percentage."}
          </p>
        </div>
      )}
    </div>
  );
}