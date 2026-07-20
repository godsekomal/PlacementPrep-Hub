const Job = require("../models/Job");
const StudentProfile = require("../models/StudentProfile");
const Application = require("../models/Application");
const calculateScore = require("../utils/rankingAlgorithm");

// Rank students for a job
const rankStudentsForJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Find all applications for this job
    const applications = await Application.find({ jobId }).populate("studentId");

    if (applications.length === 0) {
      return res.status(400).json({ message: "No students applied yet" });
    }

    let rankingList = [];

    for (let app of applications) {
      const profile = await StudentProfile.findOne({ userId: app.studentId._id });

      if (!profile) continue;

      const score = calculateScore(profile, job);

      rankingList.push({
        studentId: app.studentId._id,
        name: app.studentId.name,
        email: app.studentId.email,
        branch: profile.branch,
        cgpa: profile.cgpa,
        skills: profile.skills,
        score: score,
      });

      // update application score
      app.aiScore = score;
      await app.save();
    }

    // sort descending
    rankingList.sort((a, b) => b.score - a.score);

    // assign rank
    rankingList = rankingList.map((student, index) => ({
      ...student,
      rank: index + 1,
    }));

    res.status(200).json({
      message: "Ranking generated successfully",
      jobTitle: job.title,
      companyName: job.companyName,
      rankingList,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { rankStudentsForJob };