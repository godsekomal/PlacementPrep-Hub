// src/pages/student/NumberSystem.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NumberSystem.css";
import axiosInstance from "../../utils/axiosInstance";
export default function NumberSystem() {

const [selectedAnswers, setSelectedAnswers] = useState({});
const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
const questions = [
    {
      question: "Which is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      answer: "2",
    },

    {
      question: "Which number is divisible by 2 and 5?",
      options: ["15", "20", "25", "35"],
      answer: "20",
    },

    {
      question: "What is the HCF of 12 and 18?",
      options: ["2", "3", "6", "9"],
      answer: "6",
    },

    {
      question: "Find the LCM of 4 and 6.",
      options: ["10", "12", "18", "24"],
      answer: "12",
    },

    {
      question: "Which of the following is an even number?",
      options: ["13", "17", "22", "29"],
      answer: "22",
    },

    {
      question: "How many factors does prime number have?",
      options: ["1", "2", "3", "4"],
      answer: "2",
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
      topic: "Number System",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="numbersystem-page">

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Number System</span>

      </div>

      <div className="numbersystem-hero">

        <h1>
          Number <span>System</span>
        </h1>

        <p>
          Number System is one of the most important aptitude topics that
          improves calculation speed and mathematical understanding required
          for placement exams and competitive tests.
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
              ? "Excellent! You have good understanding of Number System "
              : "Keep practicing Number System questions."}
          </p>

        </div>
      )}
    </div>
  );
}