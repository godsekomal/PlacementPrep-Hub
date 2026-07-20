const AptitudeTestSession = require("../models/AptitudeTestSession");

// Question Bank (basic)
const questionBank = {
  Quant: [
    {
      question: "If 5 + 3 = 16, then 6 + 4 = ?",
      options: ["18", "20", "22", "24"],
      correctAnswer: "20",
    },
    {
      question: "What is 20% of 150?",
      options: ["20", "25", "30", "35"],
      correctAnswer: "30",
    },
    {
      question: "If a train travels 60 km in 1 hour, how much in 2.5 hours?",
      options: ["120", "130", "140", "150"],
      correctAnswer: "150",
    },
  ],

  Reasoning: [
    {
      question: "Find the odd one out: Apple, Mango, Banana, Carrot",
      options: ["Apple", "Mango", "Banana", "Carrot"],
      correctAnswer: "Carrot",
    },
    {
      question: "If A=1, B=2, then Z=?",
      options: ["24", "25", "26", "27"],
      correctAnswer: "26",
    },
    {
      question: "Which comes next: 2, 4, 8, 16, ?",
      options: ["18", "20", "24", "32"],
      correctAnswer: "32",
    },
  ],

  Verbal: [
    {
      question: "Choose the correct synonym of 'Happy'",
      options: ["Sad", "Joyful", "Angry", "Tired"],
      correctAnswer: "Joyful",
    },
    {
      question: "Choose correct spelling:",
      options: ["Recieve", "Receive", "Receeve", "Receve"],
      correctAnswer: "Receive",
    },
    {
      question: "Antonym of 'Strong' is?",
      options: ["Powerful", "Weak", "Hard", "Bold"],
      correctAnswer: "Weak",
    },
  ],
};

// Start Test
const startTest = async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    const questions = questionBank[topic];

    if (!questions) {
      return res.status(400).json({ message: "Invalid topic selected" });
    }

    // difficulty wise question count
    let selectedQuestions = questions;
    if (difficulty === "Easy") selectedQuestions = questions.slice(0, 2);
    if (difficulty === "Medium") selectedQuestions = questions.slice(0, 3);

    const session = await AptitudeTestSession.create({
      studentId: req.user._id,
      topic,
      difficulty,
      questions: selectedQuestions.map((q) => ({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
      })),
    });

    res.status(201).json({
      message: "Test started",
      sessionId: session._id,
      questions: session.questions.map((q) => ({
        question: q.question,
        options: q.options,
      })),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit Answer
const submitAnswer = async (req, res) => {
  try {
    const { sessionId, questionIndex, studentAnswer, timeTaken } = req.body;

    const session = await AptitudeTestSession.findById(sessionId);

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    const question = session.questions[questionIndex];

    if (!question) {
      return res.status(400).json({ message: "Invalid question index" });
    }

    question.studentAnswer = studentAnswer;
    question.timeTaken = timeTaken;

    if (studentAnswer === question.correctAnswer) {
      question.isCorrect = true;
    } else {
      question.isCorrect = false;
    }

    // total score
    session.totalScore = session.questions.filter((q) => q.isCorrect).length;
    session.totalTimeTaken = session.questions.reduce(
      (sum, q) => sum + q.timeTaken,
      0
    );

    await session.save();

    res.status(200).json({
      message: "Answer saved",
      correct: question.isCorrect,
      totalScore: session.totalScore,
      totalTimeTaken: session.totalTimeTaken,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get My Reports
const getMyTestReports = async (req, res) => {
  try {
    const reports = await AptitudeTestSession.find({ studentId: req.user._id });

    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { startTest, submitAnswer, getMyTestReports };