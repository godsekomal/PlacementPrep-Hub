// src/pages/student/Average.jsx

import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { Link } from "react-router-dom";
import "./Average.css";

export default function Average() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Find the average of 10, 20, 30, 40 and 50.",
      options: ["25", "30", "35", "40"],
      answer: "30",
    },

    {
      question:
        "The average of 6 numbers is 18. Find their total sum.",
      options: ["96", "108", "120", "132"],
      answer: "108",
    },

    {
      question:
        "The average age of 4 students is 20 years. What is their total age?",
      options: ["60", "70", "80", "90"],
      answer: "80",
    },

    {
      question:
        "Find the average of first 5 even numbers.",
      options: ["4", "5", "6", "7"],
      answer: "6",
    },

    {
      question:
        "The average marks of 5 students is 72. If one student's marks are excluded, the average becomes 70. Find the excluded marks.",
      options: ["78", "80", "82", "84"],
      answer: "80",
    },

    {
      question:
        "The average of 15 and 25 is:",
      options: ["18", "20", "22", "25"],
      answer: "20",
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
      topic: "Average",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }

};

  return (
    <div className="average-page">

      {/* BREADCRUMB */}

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Average</span>

      </div>

      {/* HERO */}

      <div className="average-hero">

        <h1>
          Average <span>Practice</span>
        </h1>

        <p>
          Average is one of the most commonly asked topics in quantitative
          aptitude. It helps students solve numerical problems quickly and
          improves calculation speed required in placement exams and aptitude
          tests.
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
        ? "Excellent! You have good understanding of Average."
        : "Keep practicing Average questions."}
    </p>

  </div>
)}

    </div>
  );
}