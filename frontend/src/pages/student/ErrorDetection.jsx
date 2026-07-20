// src/pages/student/ErrorDetection.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ErrorDetection.css";
import axiosInstance from "../../utils/axiosInstance";
export default function ErrorDetection() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Identify the incorrect part: She do not like coffee.",
      options: [
        "She",
        "do",
        "not like",
        "coffee"
      ],
      answer: "do",
    },

    {
      question:
        "Identify the incorrect part: They was playing football.",
      options: [
        "They",
        "was",
        "playing",
        "football"
      ],
      answer: "was",
    },

    {
      question:
        "Identify the incorrect part: He have completed the work.",
      options: [
        "He",
        "have",
        "completed",
        "work"
      ],
      answer: "have",
    },

    {
      question:
        "Identify the incorrect part: I did not knew the answer.",
      options: [
        "I",
        "did not",
        "knew",
        "answer"
      ],
      answer: "knew",
    },

    {
      question:
        "Identify the incorrect part: She can sings very well.",
      options: [
        "She",
        "can",
        "sings",
        "well"
      ],
      answer: "sings",
    },

    {
      question:
        "Identify the incorrect part: We enjoys the movie.",
      options: [
        "We",
        "enjoys",
        "the",
        "movie"
      ],
      answer: "enjoys",
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
      topic: "Error Detection",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="error-page">

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / </span>

        <Link to="/verbal-ability" className="home-link">
          Verbal Ability
        </Link>

        <span> / Error Detection</span>

      </div>

      <div className="error-hero">

        <h1>
          Error <span>Detection</span>
        </h1>

        <p>
          Error Detection helps students improve grammar and identify mistakes
          in sentences for placement aptitude exams.
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
              ? "Excellent! You have good understanding of Error Detection."
              : "Keep practicing Error Detection questions."}
          </p>

        </div>
      )}
    </div>
  );
}