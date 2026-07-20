// src/pages/student/BloodRelation.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BloodRelation.css";
import axiosInstance from "../../utils/axiosInstance";
export default function BloodRelation() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Pointing to a girl, Raj said, 'She is the daughter of my mother’s only son.' Who is the girl?",
      options: ["Sister", "Daughter", "Niece", "Mother"],
      answer: "Daughter",
    },

    {
      question:
        "A is the brother of B. B is the sister of C. What is A to C?",
      options: ["Brother", "Father", "Uncle", "Cousin"],
      answer: "Brother",
    },

    {
      question:
        "Pointing to a woman, Ravi said, 'She is my grandfather’s only daughter.' Who is she?",
      options: ["Mother", "Aunt", "Sister", "Grandmother"],
      answer: "Mother",
    },

    {
      question:
        "If P is the son of Q, and Q is the daughter of R, then P is R’s:",
      options: ["Son", "Grandson", "Brother", "Father"],
      answer: "Grandson",
    },

    {
      question:
        "A woman introduces a boy as the son of her brother. The boy is her:",
      options: ["Son", "Brother", "Nephew", "Cousin"],
      answer: "Nephew",
    },

    {
      question:
        "If X is Y’s sister and Z is Y’s mother, then X is Z’s:",
      options: ["Daughter", "Mother", "Sister", "Aunt"],
      answer: "Daughter",
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
      topic: "Blood Relation",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="blood-page">

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

        <span> / Blood Relation</span>

      </div>

      <div className="blood-hero">

        <h1>
          Blood <span>Relation</span>
        </h1>

        <p>
          Blood Relation questions help students understand family
          relationships and improve logical thinking ability required in
          placement aptitude exams.
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
              ? "Excellent! You have good understanding of Blood Relation."
              : "Keep practicing Blood Relation questions."}
          </p>

        </div>
      )}
    </div>
  );
}