// routes/interviewRoutes.js

const express = require("express");

const protect = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

const {
  startInterview,
  submitAnswer,
  getMyInterviewReport,
} = require("../controllers/interviewController");

const router = express.Router();


// ==============================
// START INTERVIEW
// ==============================

router.post(
  "/start",
  protect,
  roleCheck("student"),
  startInterview
);


// ==============================
// SUBMIT ANSWER
// ==============================

router.post(
  "/submit",
  protect,
  roleCheck("student"),
  submitAnswer
);


// ==============================
// INTERVIEW REPORT
// ==============================

router.get(
  "/report",
  protect,
  roleCheck("student"),
  getMyInterviewReport
);


// ==============================
// MY INTERVIEW REPORT
// ==============================

router.get(
  "/my-report",
  protect,
  roleCheck("student"),
  getMyInterviewReport
);


module.exports = router;