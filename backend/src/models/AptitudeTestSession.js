const mongoose = require("mongoose");

const aptitudeQuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },

  options: {
    type: [String],
    required: true,
  },

  correctAnswer: {
    type: String,
    required: true,
  },

  studentAnswer: {
    type: String,
    default: "",
  },

  isCorrect: {
    type: Boolean,
    default: false,
  },

  timeTaken: {
    type: Number,
    default: 0,
  },
});

const aptitudeTestSessionSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    topic: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      required: true,
    },

    questions: [aptitudeQuestionSchema],

    totalScore: {
      type: Number,
      default: 0,
    },

    totalTimeTaken: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "AptitudeTestSession",
  aptitudeTestSessionSchema
);