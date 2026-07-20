// src/pages/student/CodingDecoding.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CodingDecoding.css";
import axiosInstance from "../../utils/axiosInstance";
export default function CodingDecoding() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "If CAT = DBU, then DOG = ?",
      options: ["EPH", "EPI", "EOH", "FPH"],
      answer: "EPH",
    },

    {
      question:
        "If PEN = QFO, then BOOK = ?",
      options: ["CPPL", "CPPM", "DQQL", "CRRL"],
      answer: "CPPL",
    },

    {
      question:
        "If SCHOOL = TDIPPM, then CLASS = ?",
      options: ["DMBTT", "DMBTU", "ELCTT", "EMCTT"],
      answer: "DMBTT",
    },

    {
      question:
        "In a code, APPLE is coded as BQQMF. Then BALL is coded as:",
      options: ["CBMM", "CBNN", "DBMM", "DBNN"],
      answer: "CBMM",
    },

    {
      question:
        "If ROAD = SPCE, then GAME = ?",
      options: ["HBNF", "HBNG", "IBNF", "HCNF"],
      answer: "HBNF",
    },

    {
      question:
        "If MANGO = NBOHP, then TIGER = ?",
      options: ["UJHFS", "VJHFS", "UJGFS", "VJGFS"],
      answer: "UJHFS",
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
      topic: "Codind Decoding",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="coding-page">

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

        <span> / Coding Decoding</span>

      </div>

      <div className="coding-hero">

        <h1>
          Coding <span>Decoding</span>
        </h1>

        <p>
          Coding Decoding questions improve logical thinking and pattern
          recognition skills. It helps students solve letter, number and word
          coding problems quickly in placement aptitude exams.
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
              ? "Excellent! You have good understanding of Coding Decoding."
              : "Keep practicing Coding Decoding questions."}
          </p>

        </div>
      )}
    </div>
  );
}