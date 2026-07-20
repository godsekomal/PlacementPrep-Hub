const StudentProfile = require("../models/StudentProfile");

// CREATE / UPDATE PROFILE
const createProfile = async (req, res) => {
  try {
    const { branch, year, cgpa, skills, projects, certifications } = req.body;

    let profile = await StudentProfile.findOne({ userId: req.user._id });

    if (profile) {
      profile.branch = branch;
      profile.year = year;
      profile.cgpa = cgpa;
      profile.skills = skills;
      profile.projects = projects;
      profile.certifications = certifications;

      await profile.save();

      return res.status(200).json({
        message: "Profile updated",
        profile,
      });
    }

    profile = await StudentProfile.create({
      userId: req.user._id,
      branch,
      year,
      cgpa,
      skills,
      projects,
      certifications,
    });

    res.status(201).json({
      message: "Profile created",
      profile,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET PROFILE
const getProfile = async (req, res) => {
  try {
    const profile = await StudentProfile.findOne({ userId: req.user._id });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPLOAD RESUME
const uploadResume = async (req, res) => {
  try {
    const profile = await StudentProfile.findOne({ userId: req.user._id });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    profile.resume = req.file.path;
    await profile.save();

    res.status(200).json({
      message: "Resume uploaded successfully",
      resume: profile.resume,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createProfile, getProfile, uploadResume };