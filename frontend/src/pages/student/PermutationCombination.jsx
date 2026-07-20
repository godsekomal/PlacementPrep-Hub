// src/pages/student/PermutationCombination.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PermutationCombination.css";
import axiosInstance from "../../utils/axiosInstance";
export default function PermutationCombination() {

const [selectedAnswers, setSelectedAnswers] = useState({});
const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
const questions = [
    {
      question:
        "In how many ways can 3 letters be arranged from ABC?",
      options: ["3", "4", "5", "6"],
      answer: "6",
    },

    {
      question:
        "How many combinations of 2 items can be selected from 4 items?",
      options: ["4", "5", "6", "8"],
      answer: "6",
    },

    {
      question:
        "Find 5!",
      options: ["60", "100", "120", "150"],
      answer: "120",
    },

    {
      question:
        "How many ways can 2 students be selected from 5 students?",
      options: ["5", "10", "15", "20"],
      answer: "10",
    },

    {
      question:
        "The number of permutations of 4 different objects is:",
      options: ["12", "16", "24", "32"],
      answer: "24",
    },

    {
      question:
        "Find the value of 4C2.",
      options: ["4", "5", "6", "8"],
      answer: "6",
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
      topic: "Permutation and Combination",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="pc-page">

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Permutation and Combination</span>

      </div>

      <div className="pc-hero">

        <h1>
          Permutation & <span>Combination</span>
        </h1>

        <p>
          Permutation and Combination helps students solve arrangement,
          selection and counting problems quickly. It is an important topic in
          placement aptitude exams and improves logical thinking ability.
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
              ? "Excellent! You have good understanding of Permutation and Combination"
              : "Keep practicing Permutation and Combination questions."}
          </p>

        </div>
      )}
    </div>
  );
}