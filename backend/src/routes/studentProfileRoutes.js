const express = require("express");
const router = express.Router();

const StudentProfile = require("../models/StudentProfile");
const protect = require("../middlewares/authMiddleware");

// GET student profile
router.get("/", protect, async (req, res) => {
  try {
    let profile = await StudentProfile.findOne({
      userId: req.user._id,
    });

    // First time profile open: create basic profile from logged-in user
    if (!profile) {
      profile = await StudentProfile.create({
        userId: req.user._id,
        name: req.user.name || "",
        email: req.user.email || "",
      });
    }

    res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    console.error("Fetch Profile Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch profile",
    });
  }
});

// SAVE / UPDATE student profile
router.post("/", protect, async (req, res) => {
  try {
    const profile = await StudentProfile.findOneAndUpdate(
      {
        userId: req.user._id,
      },
      {
        ...req.body,
        userId: req.user._id,
        email: req.user.email || req.body.email,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Profile saved successfully",
      profile,
    });
  } catch (error) {
    console.error("Save Profile Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to save profile",
    });
  }
});

module.exports = router;