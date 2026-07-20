// src/pages/student/SynonymsAntonyms.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SynonymsAntonyms.css";
import axiosInstance from "../../utils/axiosInstance";
export default function SynonymsAntonyms() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Choose the synonym of 'Happy'.",
      options: [
        "Sad",
        "Joyful",
        "Angry",
        "Weak"
      ],
      answer: "Joyful",
    },

    {
      question:
        "Choose the antonym of 'Strong'.",
      options: [
        "Powerful",
        "Active",
        "Weak",
        "Healthy"
      ],
      answer: "Weak",
    },

    {
      question:
        "Choose the synonym of 'Quick'.",
      options: [
        "Slow",
        "Fast",
        "Late",
        "Weak"
      ],
      answer: "Fast",
    },

    {
      question:
        "Choose the antonym of 'Bright'.",
      options: [
        "Shiny",
        "Dark",
        "Smart",
        "Clear"
      ],
      answer: "Dark",
    },

    {
      question:
        "Choose the synonym of 'Begin'.",
      options: [
        "Start",
        "Finish",
        "Close",
        "Stop"
      ],
      answer: "Start",
    },

    {
      question:
        "Choose the antonym of 'Victory'.",
      options: [
        "Success",
        "Achievement",
        "Defeat",
        "Prize"
      ],
      answer: "Defeat",
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
      topic: "Synonyms and Antonyms",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="synonym-page">

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

        <span> / Synonyms and Antonyms</span>

      </div>

      <div className="synonym-hero">

        <h1>
          Synonyms & <span>Antonyms</span>
        </h1>

        <p>
          Synonyms and Antonyms help students improve vocabulary and English
          understanding for aptitude and placement exams.
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
              ? "Excellent! You have good understanding of Synonyms & Antonyms."
              : "Keep practicing Synonyms & Antonyms questions."}
          </p>

        </div>
      )}
    </div>
  );
}