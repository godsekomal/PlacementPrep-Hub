// src/pages/student/StatementAssumption.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StatementAssumption.css";
export default function StatementAssumption() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});

  const questions = [
    {
      question:
        "Statement: Use XYZ toothpaste for strong teeth. Assumption:",
      options: [
        "People want strong teeth",
        "Toothpaste is costly",
        "Doctors dislike toothpaste",
        "None"
      ],
      answer: "People want strong teeth",
    },

    {
      question:
        "Statement: Join coaching for better marks. Assumption:",
      options: [
        "Students want better marks",
        "Students dislike studies",
        "Coaching is free",
        "None"
      ],
      answer: "Students want better marks",
    },

    {
      question:
        "Statement: Wear helmets while driving. Assumption:",
      options: [
        "Helmets provide safety",
        "Helmets are stylish",
        "Cars are unsafe",
        "None"
      ],
      answer: "Helmets provide safety",
    },

    {
      question:
        "Statement: Drink milk daily for health. Assumption:",
      options: [
        "Milk improves health",
        "Milk is expensive",
        "People hate milk",
        "None"
      ],
      answer: "Milk improves health",
    },

    {
      question:
        "Statement: Read newspapers regularly. Assumption:",
      options: [
        "People want information",
        "Newspapers are free",
        "Books are useless",
        "None"
      ],
      answer: "People want information",
    },

    {
      question:
        "Statement: Exercise daily to stay fit. Assumption:",
      options: [
        "Exercise improves fitness",
        "People avoid fitness",
        "Exercise is boring",
        "None"
      ],
      answer: "Exercise improves fitness",
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

  return (
    <div className="assumption-page">

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

        <span> / Statement and Assumption</span>

      </div>

      <div className="assumption-hero">

        <h1>
          Statement & <span>Assumption</span>
        </h1>

        <p>
          Statement and Assumption questions help students identify hidden ideas
          and logical assumptions in placement aptitude exams.
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

    </div>
  );
}