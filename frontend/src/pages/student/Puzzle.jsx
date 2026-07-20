// src/pages/student/Puzzle.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Puzzle.css";
import axiosInstance from "../../utils/axiosInstance";
export default function Puzzle() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "If all roses are flowers and some flowers are red, then:",
      options: [
        "Some roses are red",
        "All flowers are red",
        "Cannot be determined",
        "No roses are red",
      ],
      answer: "Cannot be determined",
    },

    {
      question:
        "Find missing number: 2, 4, 8, 16, ?",
      options: ["20", "24", "32", "36"],
      answer: "32",
    },

    {
      question:
        "Which number comes next? 1, 3, 6, 10, ?",
      options: ["12", "14", "15", "18"],
      answer: "15",
    },

    {
      question:
        "If CAT = 24, BAT = 23 then RAT = ?",
      options: ["40", "41", "42", "43"],
      answer: "42",
    },

    {
      question:
        "A clock shows 3:15. Angle between hands?",
      options: ["0°", "7.5°", "15°", "30°"],
      answer: "7.5°",
    },

    {
      question:
        "Find odd one out: Apple, Mango, Carrot, Banana",
      options: ["Apple", "Mango", "Carrot", "Banana"],
      answer: "Carrot",
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
      topic: "Puzzle",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="puzzle-page">

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

        <span> / Puzzle</span>

      </div>

      <div className="puzzle-hero">

        <h1>
          Logical <span>Puzzle</span>
        </h1>

        <p>
          Puzzle questions improve reasoning ability, analytical thinking and
          problem-solving skills required in placement aptitude exams.
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
              ? "Excellent! You have good understanding of Logical Puzzle."
              : "Keep practicing Logical Puzzle questions."}
          </p>

        </div>
      )}
    </div>
  );
}