// src/pages/student/Probability.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Probability.css";
import axiosInstance from "../../utils/axiosInstance";
export default function Probability() {

const [selectedAnswers, setSelectedAnswers] = useState({});
const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
const questions = [
    {
      question: "What is the probability of getting a head in a coin toss?",
      options: ["0", "1/2", "1", "2"],
      answer: "1/2",
    },

    {
      question: "A dice is rolled. Probability of getting 4 is:",
      options: ["1/2", "1/4", "1/6", "1/8"],
      answer: "1/6",
    },

    {
      question: "Probability of getting an even number on a dice:",
      options: ["1/2", "1/3", "2/3", "1/6"],
      answer: "1/2",
    },

    {
      question: "Probability of selecting a red card from a deck:",
      options: ["1/2", "1/4", "1/3", "2/3"],
      answer: "1/2",
    },

    {
      question: "Probability of getting number greater than 4 on a dice:",
      options: ["1/3", "1/2", "2/3", "1/6"],
      answer: "1/3",
    },

    {
      question: "Probability of getting tail in coin toss:",
      options: ["1/2", "1", "0", "2"],
      answer: "1/2",
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
      topic: "Probability",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="probability-page">

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Probability</span>

      </div>

      <div className="probability-hero">

        <h1>
          Probability <span>Practice</span>
        </h1>

        <p>
          Probability helps students understand chances of events occurring.
          It is an important aptitude topic for placement exams and improves
          logical and analytical thinking skills.
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
              ? "Excellent! You have good understanding of Probability."
              : "Keep practicing Probability questions."}
          </p>

        </div>
      )}
    </div>
  );
}