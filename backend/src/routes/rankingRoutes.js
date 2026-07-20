const express = require("express");
const protect = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

const { rankStudentsForJob } = require("../controllers/rankingController");

const router = express.Router();

// Recruiter can generate ranking for job
router.get("/:jobId", protect, roleCheck("recruiter"), rankStudentsForJob);

module.exports = router;