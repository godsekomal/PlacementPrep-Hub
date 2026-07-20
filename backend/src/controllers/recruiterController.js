const Application = require("../models/Application");
const StudentProfile = require("../models/StudentProfile");

const getShortlistedStudents = async (req, res) => {
  try {
    const { jobId } = req.params;

    const applications = await Application.find({
      jobId,
      status: "Shortlisted",
    }).populate("studentId", "name email");

    let result = [];

    for (let app of applications) {
      const profile = await StudentProfile.findOne({
        userId: app.studentId._id,
      });

      result.push({
        studentId: app.studentId._id,
        name: app.studentId.name,
        email: app.studentId.email,
        branch: profile?.branch,
        cgpa: profile?.cgpa,
       resume: profile?.resume
  ? `http://localhost:5000/${profile.resume.replace(/\\/g, "/")}`
  : null,
      });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getShortlistedStudents };