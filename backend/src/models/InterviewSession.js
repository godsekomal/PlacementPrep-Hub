const mongoose = require("mongoose");

const interviewSessionSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    interviewType: {
      type: String,
      enum: ["Technical", "HR", "Practice"],
      default: "Technical",
    },

    role: { type: String, required: true },
    difficulty: { type: String, required: true },

    questions: [
      {
        question: { type: String },
        answer: { type: String, default: "" },
        feedback: { type: String, default: "" },
        score: { type: Number, default: 0 },
        timeTaken: { type: Number, default: 0 }, // seconds
      },
    ],

    totalScore: { type: Number, default: 0 },
    totalTimeTaken: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("InterviewSession", interviewSessionSchema);