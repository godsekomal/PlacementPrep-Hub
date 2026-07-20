// src/pages/student/InterviewPractice.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  startInterview,
  submitInterviewAnswer,
} from "../../services/interviewService";

import AvatarSpeaker from "../../components/AvatarSpeaker";

import "./InterviewPractice.css";

export default function InterviewPractice() {
    const navigate = useNavigate();

  const [interviewType, setInterviewType] = useState("Technical");

  const [role, setRole] = useState("Web Dev");

  const [difficulty, setDifficulty] = useState("Easy");

  const [sessionId, setSessionId] = useState("");

  const [questions, setQuestions] = useState([]);

  const [current, setCurrent] = useState(0);

  const [answer, setAnswer] = useState("");

  const [startTime, setStartTime] = useState(null);

  const [feedback, setFeedback] = useState("");

  const [score, setScore] = useState(0);

  const [avatarGender, setAvatarGender] = useState("female");

  const [completed, setCompleted] = useState(false);

  const handleStart = async () => {

    const data = await startInterview(
      interviewType,
      role,
      difficulty
    );

    setSessionId(data.sessionId);

    setQuestions(data.questions);

    setCurrent(0);

    setAnswer("");

    setFeedback("");

    setScore(0);

    setCompleted(false);

    setStartTime(Date.now());
  };

  const handleSubmit = async () => {

    const endTime = Date.now();

    const timeTaken = Math.floor(
      (endTime - startTime) / 1000
    );

    const res = await submitInterviewAnswer(
      sessionId,
      current,
      answer,
      timeTaken
    );

    setFeedback(res.feedback);

    setScore(res.totalScore);

    if (current < questions.length - 1) {

      setCurrent(current + 1);

      setAnswer("");

      setStartTime(Date.now());

    } else {

      setCompleted(true);
    }
  };

  return (

    <div className="interview-page">
            <button
  className="simple-back"
  onClick={() => {
    if (sessionId) {
      setSessionId("");
      setQuestions([]);
      setCurrent(0);
      setAnswer("");
      setFeedback("");
      setScore(0);
      setCompleted(false);
    } else {
      navigate("/");
    }
  }}
>
  ← Back
</button>

      {/* HERO */}

      <div className="interview-hero">

        <h1>
          Mock <span>Interviews</span>
        </h1>

        <p>
          Practice HR and technical interviews with AI powered
          interview rounds, instant feedback and score analysis.
        </p>

      </div>

      {/* START SCREEN */}

      {!sessionId && (

        <div className="setup-card">

          <h2>Select Interview Setup</h2>

          {/* AVATAR */}

          <div className="avatar-section">

            <h3>Select Avatar</h3>

            <div className="avatar-buttons">

              <button
                className={
                  avatarGender === "female"
                    ? "active-avatar"
                    : ""
                }
                onClick={() => setAvatarGender("female")}
              >
                Female
              </button>

              <button
                className={
                  avatarGender === "male"
                    ? "active-avatar"
                    : ""
                }
                onClick={() => setAvatarGender("male")}
              >
                Male
              </button>

            </div>

            <img
              src={
                avatarGender === "female"
                  ? "/avatars/female.jpg"
                  : "/avatars/male.jpg"
              }
              alt="avatar"
              className="avatar-image"
            />

          </div>

          {/* SELECTS */}

          <div className="select-group">

            <label>Interview Type</label>

            <select
              value={interviewType}
              onChange={(e) =>
                setInterviewType(e.target.value)
              }
            >
              <option value="Technical">
                Technical
              </option>

              <option value="HR">
                HR
              </option>

              <option value="Practice">
                Practice
              </option>

            </select>

          </div>

          <div className="select-group">

            <label>Role</label>

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
            >
              <option value="Web Dev">
                Web Dev
              </option>

              <option value="Java">
                Java
              </option>

              <option value="Python">
                Python
              </option>

              <option value="General">
                General
              </option>

            </select>

          </div>

          <div className="select-group">

            <label>Difficulty</label>

            <select
              value={difficulty}
              onChange={(e) =>
                setDifficulty(e.target.value)
              }
            >
              <option value="Easy">
                Easy
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="Hard">
                Hard
              </option>

            </select>

          </div>

          <button
            className="start-btn"
            onClick={handleStart}
          >
            Start Interview
          </button>

        </div>

      )}

      {/* INTERVIEW QUESTIONS */}

      {sessionId &&
        questions.length > 0 &&
        !completed && (

        <div className="question-card">

          <AvatarSpeaker
            text={questions[current]?.question}
            gender={avatarGender}
          />

          <div className="progress">

            Question {current + 1} / {questions.length}

          </div>

          <h2>
            {questions[current].question}
          </h2>

          <textarea
            rows="6"
            value={answer}
            onChange={(e) =>
              setAnswer(e.target.value)
            }
            placeholder="Type your answer here..."
          />

          <button
            className="submit-btn"
            onClick={handleSubmit}
          >
            Submit Answer
          </button>

          {feedback && (

            <div className="feedback-box">

              <p>
                <strong>Feedback:</strong>
                {" "}
                {feedback}
              </p>

              <p>
                <strong>Total Score:</strong>
                {" "}
                {score}
              </p>

            </div>

          )}

        </div>

      )}

      {/* RESULT */}

      {completed && (

        <div className="result-card">

          <h2>
            Interview Completed 🎉
          </h2>

          <p>
            Your Final Score:
          </p>

          <h1>
            {score}
          </h1>

        </div>

      )}

    </div>

  );
}