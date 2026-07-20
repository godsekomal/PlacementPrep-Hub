const Application = require("../models/Application");

// APPLY JOB
const applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    // check already applied
    const alreadyApplied = await Application.findOne({
      jobId,
      studentId: req.user._id,
    });

    if (alreadyApplied) {
      return res.status(400).json({ message: "Already applied for this job" });
    }

    const application = await Application.create({
      jobId,
      studentId: req.user._id,
    });

    res.status(201).json({
      message: "Job applied successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET MY APPLICATIONS (Student)
const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      studentId: req.user._id,
    }).populate("jobId");

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// SHORTLIST STUDENT (Recruiter)
const shortlistStudent = async (req, res) => {
  try {
    const { applicationId } = req.body;

    const application = await Application.findById(applicationId);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    application.status = "Shortlisted";
    await application.save();

    res.status(200).json({
      message: "Student shortlisted successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// GET SHORTLISTED JOBS (Student)
const getShortlistedJobs = async (req, res) => {
  try {
    const shortlisted = await Application.find({
      studentId: req.user._id,
      status: "Shortlisted",
    }).populate("jobId");

    res.status(200).json(shortlisted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { applyJob, getMyApplications, shortlistStudent, getShortlistedJobs };