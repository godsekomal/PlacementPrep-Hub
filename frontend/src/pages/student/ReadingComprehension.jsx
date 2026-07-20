// src/pages/student/ReadingComprehension.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ReadingComprehension.css";
import axiosInstance from "../../utils/axiosInstance";
export default function ReadingComprehension() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [finalScore, setFinalScore] = useState(null);
  const passage = `
  Rahul wanted to improve his placement preparation skills.
  He started practicing aptitude and reasoning daily for two hours.
  After a few months, his speed and accuracy improved significantly.
  He became more confident and finally got placed in a reputed company.
  `;

  const questions = [
    {
      question:
        "Why did Rahul start practicing daily?",
      options: [
        "To improve placement preparation",
        "To play games",
        "To travel",
        "To learn music"
      ],
      answer: "To improve placement preparation",
    },

    {
      question:
        "How many hours did Rahul practice daily?",
      options: [
        "1 hour",
        "2 hours",
        "3 hours",
        "4 hours"
      ],
      answer: "2 hours",
    },

    {
      question:
        "What improved after regular practice?",
      options: [
        "Speed and accuracy",
        "Height",
        "Vacation time",
        "Internet speed"
      ],
      answer: "Speed and accuracy",
    },

    {
      question:
        "How did Rahul feel after improvement?",
      options: [
        "Confident",
        "Sad",
        "Lazy",
        "Angry"
      ],
      answer: "Confident",
    },

    {
      question:
        "What happened finally?",
      options: [
        "He got placed",
        "He left studies",
        "He changed school",
        "Nothing happened"
      ],
      answer: "He got placed",
    },

    {
      question:
        "Which skill did Rahul practice daily?",
      options: [
        "Aptitude and reasoning",
        "Cooking",
        "Drawing",
        "Singing"
      ],
      answer: "Aptitude and reasoning",
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
      topic: "Reading Comprehension",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="rc-page">

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

        <span> / Reading Comprehension</span>

      </div>

      <div className="rc-hero">

        <h1>
          Reading <span>Comprehension</span>
        </h1>

        <p>
          Reading Comprehension helps students improve understanding,
          vocabulary and analytical reading skills required in placement exams.
        </p>

      </div>

      {/* PASSAGE */}

      <div className="passage-box">

        <h2>Passage</h2>

        <p>{passage}</p>

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
              ? "Excellent! You have good understanding of Reading Comprehension."
              : "Keep practicing Reading Comprehension questions."}
          </p>

        </div>
      )}
    </div>
  );
}