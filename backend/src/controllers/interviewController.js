
const InterviewSession = require("../models/InterviewSession");


// ==========================================
// GENERATE QUESTIONS
// ==========================================

const generateQuestions = (
  interviewType,
  role,
  difficulty
) => {

  let questions = [];

  // TECHNICAL QUESTIONS

  if (interviewType === "Technical") {

    if (role === "Web Dev") {

      questions = [
        "What is React?",
        "What is useState hook?",
        "Difference between HTML and HTML5?",
        "What is REST API?",
        "Explain CSS Flexbox.",
      ];

    }

    else if (role === "Java") {

      questions = [
        "What is OOP in Java?",
        "Difference between abstract class and interface?",
        "What is JVM?",
        "Explain Exception Handling.",
        "What is multithreading?",
      ];

    }

    else if (role === "Python") {

      questions = [
        "What is Python?",
        "Explain list vs tuple.",
        "What is a dictionary in Python?",
        "Explain OOP in Python.",
        "What is Flask/Django?",
      ];

    }

    else {

      questions = [
        "Explain OOP concepts.",
        "What is DBMS?",
        "Explain time complexity.",
        "What is an API?",
        "Explain Git and GitHub.",
      ];

    }

  }

  // HR QUESTIONS

  else if (interviewType === "HR") {

    questions = [
      "Tell me about yourself.",
      "What are your strengths?",
      "What are your weaknesses?",
      "Why should we hire you?",
      "Where do you see yourself in 5 years?",
    ];

  }

  // PRACTICE QUESTIONS

  else if (interviewType === "Practice") {

    questions = [
      "What is your biggest achievement?",
      "Explain one project from your resume.",
      "What is teamwork?",
      "Explain one technical concept you like.",
      "What motivates you?",
    ];

  }

  // DIFFICULTY LEVEL

  if (difficulty === "Easy") {

    return questions.slice(0, 3);

  }

  if (difficulty === "Medium") {

    return questions.slice(0, 4);

  }

  return questions;

};


// ==========================================
// START INTERVIEW
// ==========================================

const startInterview = async (req, res) => {

  try {

    console.log("REQ USER => ", req.user);

    const {
      interviewType,
      role,
      difficulty,
    } = req.body;

    // CHECK LOGIN

    if (!req.user) {

      return res.status(401).json({
        message: "Please login first",
      });

    }

    // VALIDATION

    if (
      !interviewType ||
      !role ||
      !difficulty
    ) {

      return res.status(400).json({
        message: "All fields required",
      });

    }

    // GENERATE QUESTIONS

    const questionList =
      generateQuestions(
        interviewType,
        role,
        difficulty
      );

    // CREATE SESSION

    const session =
      await InterviewSession.create({

        studentId: req.user._id,

        interviewType,

        role,

        difficulty,

        questions: questionList.map((q) => ({

          question: q,

          answer: "",

          feedback: "",

          score: 0,

          timeTaken: 0,

        })),

      });

    res.status(201).json({

      message: "Interview started",

      sessionId: session._id,

      questions: session.questions,

    });

  }

  catch (error) {

    console.log(
      "START INTERVIEW ERROR => ",
      error
    );

    res.status(500).json({
      message: error.message,
    });

  }

};


// ==========================================
// SUBMIT ANSWER
// ==========================================

const submitAnswer = async (req, res) => {

  try {

    const {
      sessionId,
      questionIndex,
      answer,
      timeTaken,
    } = req.body;

    const session =
      await InterviewSession.findById(
        sessionId
      );

    if (!session) {

      return res.status(404).json({
        message: "Session not found",
      });

    }

    let score = 0;

    let feedback =
      "Needs improvement";

    if (answer.length > 30) {

      score = 8;

      feedback =
        "Good answer!";

    }

    else if (answer.length > 10) {

      score = 5;

      feedback =
        "Average answer, add more details.";

    }

    else {

      score = 2;

      feedback =
        "Too short, explain properly.";

    }

    // SAVE ANSWER

    session.questions[
      questionIndex
    ].answer = answer;

    session.questions[
      questionIndex
    ].score = score;

    session.questions[
      questionIndex
    ].feedback = feedback;

    session.questions[
      questionIndex
    ].timeTaken = timeTaken;

    // TOTAL SCORE

    session.totalScore =
      session.questions.reduce(
        (sum, q) => sum + q.score,
        0
      );

    // TOTAL TIME

    session.totalTimeTaken =
      session.questions.reduce(
        (sum, q) =>
          sum + q.timeTaken,
        0
      );

    await session.save();

    res.status(200).json({

      message:
        "Answer submitted",

      score,

      feedback,

      totalScore:
        session.totalScore,

      totalTimeTaken:
        session.totalTimeTaken,

    });

  }

  catch (error) {

    console.log(
      "SUBMIT ERROR => ",
      error
    );

    res.status(500).json({
      message: error.message,
    });

  }

};


// ==========================================
// GET MY REPORT
// ==========================================

const getMyInterviewReport =
  async (req, res) => {

    try {

      if (!req.user) {

        return res.status(401).json({
          message: "Please login first",
        });

      }

      const sessions =
        await InterviewSession.find({

          studentId:
            req.user._id,

        }).sort({
          createdAt: -1,
        });

      res.status(200).json(
        sessions
      );

    }

    catch (error) {

      console.log(
        "REPORT ERROR => ",
        error
      );

      res.status(500).json({
        message: error.message,
      });

    }

  };


// ==========================================

module.exports = {

  startInterview,

  submitAnswer,

  getMyInterviewReport,

};

