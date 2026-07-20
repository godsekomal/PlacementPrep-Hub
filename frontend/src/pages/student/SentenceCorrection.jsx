// src/pages/student/SentenceCorrection.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SentenceCorrection.css";
import axiosInstance from "../../utils/axiosInstance";
export default function SentenceCorrection() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Choose the correct sentence.",
      options: [
        "She go to school daily",
        "She goes to school daily",
        "She going to school daily",
        "She gone to school daily"
      ],
      answer: "She goes to school daily",
    },

    {
      question:
        "Choose the correct sentence.",
      options: [
        "He have completed work",
        "He has completed work",
        "He having completed work",
        "He completion work"
      ],
      answer: "He has completed work",
    },

    {
      question:
        "Choose the correct sentence.",
      options: [
        "They was playing",
        "They were playing",
        "They is playing",
        "They be playing"
      ],
      answer: "They were playing",
    },

    {
      question:
        "Choose the correct sentence.",
      options: [
        "I did not knew",
        "I do not knew",
        "I did not know",
        "I not know"
      ],
      answer: "I did not know",
    },

    {
      question:
        "Choose the correct sentence.",
      options: [
        "She can sings well",
        "She can sing well",
        "She can singing well",
        "She can sang well"
      ],
      answer: "She can sing well",
    },

    {
      question:
        "Choose the correct sentence.",
      options: [
        "We enjoyed the movie",
        "We enjoy the movie yesterday",
        "We enjoying the movie",
        "We enjoys the movie"
      ],
      answer: "We enjoyed the movie",
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
      topic: "Sentence Corrrection",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="sentence-page">

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

        <span> / Sentence Correction</span>

      </div>

      <div className="sentence-hero">

        <h1>
          Sentence <span>Correction</span>
        </h1>

        <p>
          Sentence Correction helps students improve grammar, sentence
          structure and English accuracy for placement exams.
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
              ? "Excellent! You have good understanding of Sentence Correction."
              : "Keep practicing Sentence Correction questions."}
          </p>

        </div>
      )}
    </div>
  );
}