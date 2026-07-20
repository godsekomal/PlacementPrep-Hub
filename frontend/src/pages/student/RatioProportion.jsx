// src/pages/student/RatioProportion.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RatioProportion.css";
import axiosInstance from "../../utils/axiosInstance";

export default function RatioProportion() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Find the ratio of 20 to 25.",
      options: ["2:3", "3:4", "4:5", "5:6"],
      answer: "4:5",
    },

    {
      question:
        "If A:B = 3:5 and A = 18, find B.",
      options: ["20", "25", "30", "35"],
      answer: "30",
    },

    {
      question:
        "The ratio of boys to girls in a class is 4:3. If boys are 24, find girls.",
      options: ["16", "18", "20", "22"],
      answer: "18",
    },

    {
      question:
        "Two numbers are in the ratio 5:7 and their sum is 96. Find the smaller number.",
      options: ["35", "40", "45", "50"],
      answer: "40",
    },

    {
      question:
        "Find the fourth proportional to 2, 4 and 8.",
      options: ["12", "14", "16", "18"],
      answer: "16",
    },

    {
      question:
        "If 12 pens cost ₹96, what is the cost of 18 pens?",
      options: ["₹124", "₹132", "₹144", "₹156"],
      answer: "₹144",
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
      topic: "Ratio and Proportion",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="ratio-page">

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / Ratio and Proportion</span>

      </div>

      <div className="ratio-hero">

        <h1>
          Ratio & <span>Proportion</span>
        </h1>

        <p>
          Ratio and Proportion helps students compare quantities and solve
          aptitude problems faster. It is widely used in placement exams for
          questions related to sharing, comparison and proportional values.
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
              ? "Excellent! You have good understanding of Ratio & Proportion"
              : "Keep practicing Ratio & Proportion questions."}
          </p>

        </div>
      )}
    </div>
  );
}