const express = require("express");
const protect = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

const {
  startTest,
  submitAnswer,
  getMyTestReports,
} = require("../controllers/aptitudeController");

const router = express.Router();

// Start aptitude test
router.post("/start", protect, roleCheck("student"), startTest);

// Submit answer
router.post("/submit", protect, roleCheck("student"), submitAnswer);

// Get report
router.get("/report", protect, roleCheck("student"), getMyTestReports);

module.exports = router;