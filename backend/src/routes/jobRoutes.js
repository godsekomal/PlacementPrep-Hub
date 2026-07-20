const express = require("express");
const protect = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

const { postJob, getAllJobs } = require("../controllers/jobController");

const router = express.Router();

// Recruiter posts job
router.post("/post", protect, roleCheck("recruiter"), postJob);

// Get all jobs (student/admin/recruiter)
router.get("/", protect, getAllJobs);

module.exports = router;