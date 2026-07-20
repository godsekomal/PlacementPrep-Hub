// src/pages/student/StatementConclusion.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StatementConclusion.css";
import axiosInstance from "../../utils/axiosInstance";
export default function StatementConclusion() {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
const [finalScore, setFinalScore] = useState(null);
  const questions = [
    {
      question:
        "Statement: All students study regularly. Conclusion: Students pass exams.",
      options: [
        "Definitely true",
        "Probably true",
        "False",
        "Cannot say"
      ],
      answer: "Probably true",
    },

    {
      question:
        "Statement: The roads are wet. Conclusion: It rained.",
      options: [
        "Definitely true",
        "Probably true",
        "False",
        "Cannot say"
      ],
      answer: "Probably true",
    },

    {
      question:
        "Statement: Some books are costly. Conclusion: All books are costly.",
      options: [
        "True",
        "False",
        "Probably true",
        "Cannot say"
      ],
      answer: "False",
    },

    {
      question:
        "Statement: Every player practices daily. Conclusion: Practice improves skill.",
      options: [
        "True",
        "False",
        "Probably true",
        "Cannot say"
      ],
      answer: "Probably true",
    },

    {
      question:
        "Statement: The shop is closed today. Conclusion: Today is a holiday.",
      options: [
        "Definitely true",
        "Probably true",
        "False",
        "Cannot say"
      ],
      answer: "Cannot say",
    },

    {
      question:
        "Statement: Rahul scored highest marks. Conclusion: Rahul studied hard.",
      options: [
        "Definitely true",
        "Probably true",
        "False",
        "Cannot say"
      ],
      answer: "Probably true",
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
      topic: "Statement and Conclusion",
      score,
      totalQuestions: questions.length,
      percentage: (score / questions.length) * 100,
    });
  } catch (error) {
    console.log("Score save error:", error);
  }
};
  return (
    <div className="statement-page">

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

        <span> / Statement and Conclusion</span>

      </div>

      <div className="statement-hero">

        <h1>
          Statement & <span>Conclusion</span>
        </h1>

        <p>
          Statement and Conclusion questions improve logical thinking and help
          students analyze conclusions based on given statements in placement exams.
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
              ? "Excellent! You have good understanding of Statement & Conclusion."
              : "Keep practicing Statement & Conclusion questions."}
          </p>

        </div>
      )}
    </div>
  );
}