// src/pages/student/Syllogism.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Syllogism.css";
import axiosInstance from "../../utils/axiosInstance";
export default function Syllogism() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "All cats are animals. All animals are living beings. Cats are:",
      options: ["Non-living", "Living beings", "Birds", "Plants"],
      answer: "Living beings",
    },

    {
      question:
        "All roses are flowers. Some flowers fade quickly. Roses are:",
      options: ["Trees", "Flowers", "Fruits", "Leaves"],
      answer: "Flowers",
    },

    {
      question:
        "All pencils are pens. Some pens are markers. Pencils are:",
      options: ["Markers", "Pens", "Books", "Erasers"],
      answer: "Pens",
    },

    {
      question:
        "All apples are fruits. Fruits are healthy. Apples are:",
      options: ["Healthy", "Unhealthy", "Vegetables", "Snacks"],
      answer: "Healthy",
    },

    {
      question:
        "Some students are athletes. All athletes are fit. Athletes are:",
      options: ["Weak", "Fit", "Lazy", "Tall"],
      answer: "Fit",
    },

    {
      question:
        "All birds can fly. Sparrow is a bird. Sparrow can:",
      options: ["Swim", "Run", "Fly", "Climb"],
      answer: "Fly",
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
      topic: "Syllogism",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="syllogism-page">

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / </span>

        <Link to="/logical-reasoning" className="home-link">
          Logical Reasoning
        </Link>

        <span> / Syllogism</span>

      </div>

      <div className="syllogism-hero">

        <h1>
          <span>Syllogism</span>
        </h1>

        <p>
          Syllogism questions improve logical analysis and conclusion drawing
          ability required in placement aptitude exams.
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
              ? "Excellent! You have good understanding of Syllogism."
              : "Keep practicing Syllogism questions."}
          </p>

        </div>
      )}
    </div>
  );
}