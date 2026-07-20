const Job = require("../models/Job");

// POST JOB (Recruiter)
const postJob = async (req, res) => {
  try {
    const {
      title,
      companyName,
      description,
      requiredSkills,
      minCgpa,
      eligibleBranches,
      salaryPackage,
      deadline,
    } = req.body;

    const job = await Job.create({
      recruiterId: req.user._id,
      title,
      companyName,
      description,
      requiredSkills,
      minCgpa,
      eligibleBranches,
      salaryPackage,
      deadline,
    });

    res.status(201).json({ message: "Job posted successfully", job });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL JOBS (Student + Admin)
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { postJob, getAllJobs };