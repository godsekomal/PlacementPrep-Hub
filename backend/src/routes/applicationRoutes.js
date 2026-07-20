const express = require("express");
const protect = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

const {
  applyJob,
  getMyApplications,
  shortlistStudent,
  getShortlistedJobs
} = require("../controllers/applicationController");
const router = express.Router();

// student apply job
router.post("/apply", protect, roleCheck("student"), applyJob);

// student view applied jobs
router.get("/my", protect, roleCheck("student"), getMyApplications);
router.put("/shortlist", protect, roleCheck("recruiter"), shortlistStudent);
router.get("/shortlisted", protect, roleCheck("student"), getShortlistedJobs);
module.exports = router;