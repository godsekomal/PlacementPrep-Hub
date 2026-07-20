// src/pages/student/TimeWork.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TimeWork.css";
import axiosInstance from "../../utils/axiosInstance";
export default function TimeWork() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "A can complete a work in 10 days. How much work does A complete in 1 day?",
      options: ["1/5", "1/10", "1/15", "1/20"],
      answer: "1/10",
    },

    {
      question:
        "A can do a piece of work in 12 days and B in 18 days. In how many days can they complete it together?",
      options: ["6 Days", "7.2 Days", "8 Days", "9 Days"],
      answer: "7.2 Days",
    },

    {
      question:
        "If 5 workers can complete a work in 20 days, how many days will 10 workers take?",
      options: ["5 Days", "8 Days", "10 Days", "15 Days"],
      answer: "10 Days",
    },

    {
      question:
        "A completes work in 15 days and B in 20 days. Who is faster?",
      options: ["A", "B", "Both Same", "Cannot Determine"],
      answer: "A",
    },

    {
      question:
        "12 men can complete a work in 18 days. How many men are needed to complete the work in 9 days?",
      options: ["18", "20", "22", "24"],
      answer: "24",
    },

    {
      question:
        "A pipe fills a tank in 6 hours. What part of tank is filled in 1 hour?",
      options: ["1/3", "1/4", "1/5", "1/6"],
      answer: "1/6",
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
      topic: "Time and Work",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};

  return (
    <div className="timework-page">

      {/* BREADCRUMB */}

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Time and Work</span>

      </div>

      {/* HERO */}

      <div className="timework-hero">

        <h1>
          Time & <span>Work</span>
        </h1>

        <p>
          Time and Work is an important quantitative aptitude topic used in
          placement exams. It helps students solve problems related to work
          efficiency, combined work, pipes and cisterns, and worker productivity
          using logical calculations and shortcuts.
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
              ? "Excellent! You have good understanding of Time & Work."
              : "Keep practicing Time & Work questions."}
          </p>

        </div>
      )}
    </div>
  );
}