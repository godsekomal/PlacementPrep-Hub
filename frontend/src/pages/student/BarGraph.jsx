// src/pages/student/BarGraph.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BarGraph.css";
import axiosInstance from "../../utils/axiosInstance";
export default function BarGraph() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Sales in January were 200 and February were 300. Find the increase.",
      options: ["50", "75", "100", "125"],
      answer: "100",
    },

    {
      question:
        "A bar graph shows 500 students in Science and 400 in Commerce. Find the difference.",
      options: ["50", "75", "100", "120"],
      answer: "100",
    },

    {
      question:
        "Company A sold 250 units and Company B sold 350 units. Total sales?",
      options: ["500", "550", "600", "650"],
      answer: "600",
    },

    {
      question:
        "Bar graph shows profit of ₹7000 and loss of ₹2000. Net profit?",
      options: ["₹3000", "₹4000", "₹5000", "₹6000"],
      answer: "₹5000",
    },

    {
      question:
        "Production increased from 120 to 180 units. Increase percentage?",
      options: ["40%", "45%", "50%", "60%"],
      answer: "50%",
    },

    {
      question:
        "A graph shows 800 boys and 600 girls. Total students?",
      options: ["1200", "1300", "1400", "1500"],
      answer: "1400",
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
      topic: "Bar Graph",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};

  return (
    <div className="bargraph-page">

      {/* BREADCRUMB */}

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

        <span> / Bar Graph</span>

      </div>

      {/* HERO */}

      <div className="bargraph-hero">

        <h1>
          Bar <span>Graph</span>
        </h1>

        <p>
          Bar Graph questions help students compare values and analyze numerical
          data quickly. It improves interpretation skills, logical thinking and
          calculation speed required in placement aptitude exams.
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
              ? "Excellent! You have good understanding of Bar Graph."
              : "Keep practicing Bar Graph questions."}
          </p>

        </div>
      )}
    </div>
  );
}