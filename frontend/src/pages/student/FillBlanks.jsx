// src/pages/student/FillBlanks.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FillBlanks.css";
import axiosInstance from "../../utils/axiosInstance";
export default function FillBlanks() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "She ___ to school daily.",
      options: [
        "go",
        "goes",
        "going",
        "gone"
      ],
      answer: "goes",
    },

    {
      question:
        "They ___ football yesterday.",
      options: [
        "play",
        "played",
        "playing",
        "plays"
      ],
      answer: "played",
    },

    {
      question:
        "Rahul ___ completed his work.",
      options: [
        "has",
        "have",
        "having",
        "had been"
      ],
      answer: "has",
    },

    {
      question:
        "We ___ watching a movie.",
      options: [
        "is",
        "am",
        "are",
        "was"
      ],
      answer: "are",
    },

    {
      question:
        "The sun ___ in the east.",
      options: [
        "rise",
        "rises",
        "rising",
        "rose"
      ],
      answer: "rises",
    },

    {
      question:
        "I ___ my homework last night.",
      options: [
        "complete",
        "completed",
        "completing",
        "completes"
      ],
      answer: "completed",
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
      topic: "Fill in the Blanks",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};

  return (
    <div className="fill-page">

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

        <span> / Fill in the Blanks</span>

      </div>

      <div className="fill-hero">

        <h1>
          Fill in the <span>Blanks</span>
        </h1>

        <p>
          Fill in the Blanks questions help students improve grammar,
          vocabulary and sentence understanding skills.
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
              ? "Excellent! You have good understanding of Fill in the Blanks."
              : "Keep practicing Fill in the Blanks questions."}
          </p>

        </div>
      )}
    </div>
  );
}