const express = require("express");
const protect = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const {
  createProfile,
  getProfile,
  uploadResume,
} = require("../controllers/studentController");

const router = express.Router();

// Student Profile routes
router.post("/profile", protect, roleCheck("student"), createProfile);
router.get("/profile", protect, roleCheck("student"), getProfile);

// Resume Upload
router.post(
  "/upload-resume",
  protect,
  roleCheck("student"),
  upload.single("resume"),
  uploadResume
);

module.exports = router;