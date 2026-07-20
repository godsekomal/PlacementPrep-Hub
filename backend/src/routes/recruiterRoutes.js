const express = require("express");
const protect = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

const { getShortlistedStudents } = require("../controllers/recruiterController");

const router = express.Router();

// Recruiter can view shortlisted students (with resume link)
router.get(
  "/shortlisted/:jobId",
  protect,
  roleCheck("recruiter"),
  getShortlistedStudents
);

module.exports = router;