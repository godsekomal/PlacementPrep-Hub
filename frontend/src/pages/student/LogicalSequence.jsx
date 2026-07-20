// src/pages/student/LogicalSequence.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LogicalSequence.css";
import axiosInstance from "../../utils/axiosInstance";
export default function LogicalSequence() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Arrange in logical order: Study, Exam, Result, Admission",
      options: [
        "Admission, Study, Exam, Result",
        "Study, Admission, Result, Exam",
        "Exam, Study, Result, Admission",
        "Result, Exam, Study, Admission"
      ],
      answer: "Admission, Study, Exam, Result",
    },

    {
      question:
        "Arrange logically: Seed, Plant, Flower, Fruit",
      options: [
        "Seed, Plant, Flower, Fruit",
        "Plant, Seed, Flower, Fruit",
        "Flower, Seed, Fruit, Plant",
        "Fruit, Flower, Plant, Seed"
      ],
      answer: "Seed, Plant, Flower, Fruit",
    },

    {
      question:
        "Arrange logically: Infant, Child, Teenager, Adult",
      options: [
        "Infant, Child, Teenager, Adult",
        "Adult, Teenager, Child, Infant",
        "Teenager, Child, Infant, Adult",
        "Child, Adult, Teenager, Infant"
      ],
      answer: "Infant, Child, Teenager, Adult",
    },

    {
      question:
        "Arrange logically: Purchase, Payment, Delivery, Order",
      options: [
        "Order, Payment, Purchase, Delivery",
        "Purchase, Delivery, Order, Payment",
        "Payment, Order, Delivery, Purchase",
        "Delivery, Purchase, Payment, Order"
      ],
      answer: "Order, Payment, Purchase, Delivery",
    },

    {
      question:
        "Arrange logically: Morning, Afternoon, Evening, Night",
      options: [
        "Morning, Afternoon, Evening, Night",
        "Night, Evening, Afternoon, Morning",
        "Afternoon, Evening, Morning, Night",
        "Evening, Morning, Night, Afternoon"
      ],
      answer: "Morning, Afternoon, Evening, Night",
    },

    {
      question:
        "Arrange logically: Application, Interview, Selection, Joining",
      options: [
        "Application, Interview, Selection, Joining",
        "Joining, Selection, Interview, Application",
        "Interview, Joining, Selection, Application",
        "Selection, Application, Joining, Interview"
      ],
      answer: "Application, Interview, Selection, Joining",
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
      topic: "Logical Sequence",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};

  return (
    <div className="sequence-page">

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

        <span> / Logical Sequence</span>

      </div>

      <div className="sequence-hero">

        <h1>
          Logical <span>Sequence</span>
        </h1>

        <p>
          Logical Sequence questions improve analytical thinking and help
          students arrange events in proper order during placement exams.
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
              ? "Excellent! You have good understanding of Logical Sequence."
              : "Keep practicing Logical Sequence questions."}
          </p>

        </div>
      )}
    </div>
  );
}