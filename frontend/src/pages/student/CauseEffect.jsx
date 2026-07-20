// src/pages/student/CauseEffect.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CauseEffect.css";
import axiosInstance from "../../utils/axiosInstance";
export default function CauseEffect() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Heavy rainfall occurred in the city. What is the effect?",
      options: [
        "Roads flooded",
        "Temperature increased",
        "People slept early",
        "None"
      ],
      answer: "Roads flooded",
    },

    {
      question:
        "Students practiced aptitude daily. What is the effect?",
      options: [
        "Better scores",
        "Less confidence",
        "More holidays",
        "None"
      ],
      answer: "Better scores",
    },

    {
      question:
        "The company reduced product prices. What is the effect?",
      options: [
        "Sales increased",
        "Factories closed",
        "Internet stopped",
        "None"
      ],
      answer: "Sales increased",
    },

    {
      question:
        "People planted more trees. What is the effect?",
      options: [
        "Cleaner environment",
        "Higher pollution",
        "Less oxygen",
        "None"
      ],
      answer: "Cleaner environment",
    },

    {
      question:
        "The player practiced regularly. What is the effect?",
      options: [
        "Improved performance",
        "Lost interest",
        "Stopped training",
        "None"
      ],
      answer: "Improved performance",
    },

    {
      question:
        "Electricity supply stopped suddenly. What is the effect?",
      options: [
        "Power outage",
        "Road expansion",
        "Rainfall started",
        "None"
      ],
      answer: "Power outage",
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
      topic: "Cause and Effect",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="cause-page">

      <div className="breadcrumb">

        <Link to="/" className="home-link">
          Home
        </Link>

        <span> / </span>

        <Link to="/student/aptitude" className="home-link">
          Aptitude Practice
        </Link>

        <span> / </span>

        <Link to="/verbal-reasoning" className="home-link">
          Verbal Reasoning
        </Link>

        <span> / Cause and Effect</span>

      </div>

      <div className="cause-hero">

        <h1>
          Cause & <span>Effect</span>
        </h1>

        <p>
          Cause and Effect questions help students understand relationships
          between events and improve logical reasoning skills for placement exams.
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
              ? "Excellent! You have good understanding of Cause & Effect."
              : "Keep practicing Cause & Effect questions."}
          </p>

        </div>
      )}
    </div>
  );
}