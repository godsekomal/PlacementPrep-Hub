// src/pages/student/LineGraph.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LineGraph.css";
import axiosInstance from "../../utils/axiosInstance";
export default function LineGraph() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Sales increased from 100 to 150. Increase?",
      options: ["25", "40", "50", "60"],
      answer: "50",
    },

    {
      question:
        "Temperature changed from 20°C to 30°C. Difference?",
      options: ["5", "8", "10", "12"],
      answer: "10",
    },

    {
      question:
        "Production was 500 units in Jan and 700 in Feb. Total?",
      options: ["1000", "1100", "1200", "1300"],
      answer: "1200",
    },

    {
      question:
        "Revenue increased from ₹2000 to ₹3000. Increase percentage?",
      options: ["25%", "40%", "50%", "60%"],
      answer: "50%",
    },

    {
      question:
        "Population increased from 80 lakh to 100 lakh. Increase?",
      options: ["10", "15", "20", "25"],
      answer: "20",
    },

    {
      question:
        "Marks improved from 60 to 90. Increase?",
      options: ["20", "25", "30", "35"],
      answer: "30",
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
      topic: "Line Graph",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="linegraph-page">

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / </span>

        <Link to="/data-interpretation" className="home-link">
          Data Interpretation
        </Link>

        <span> / Line Graph</span>

      </div>

      <div className="linegraph-hero">

        <h1>
          Line <span>Graph</span>
        </h1>

        <p>
          Line Graph questions help students analyze trends, comparisons and
          growth patterns using graphical data representation in aptitude exams.
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
              ? "Excellent! You have good understanding of Line Graph."
              : "Keep practicing Line Graph questions."}
          </p>

        </div>
      )}
    </div>
  );
}