const mongoose = require("mongoose");

const studentProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    name: { type: String, default: "" },
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    college: { type: String, default: "" },
    branch: { type: String, default: "" },
    year: { type: String, default: "" },
    cgpa: { type: String, default: "" },
    skills: { type: String, default: "" },
    projects: { type: String, default: "" },
    certifications: { type: String, default: "" },
    internship: { type: String, default: "" },
    role: { type: String, default: "" },
    location: { type: String, default: "" },
    expectedPackage: { type: String, default: "" },
    profileImage: { type: String, default: "" },
    resume: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("StudentProfile", studentProfileSchema);