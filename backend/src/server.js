const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const studentProfileRoutes = require("./routes/studentProfileRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const rankingRoutes = require("./routes/rankingRoutes");
const path = require("path");
const recruiterRoutes = require("./routes/recruiterRoutes");
const aptitudeRoutes = require("./routes/aptitudeRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const aptitudeFeedbackRoutes = require("./routes/aptitudeFeedbackRoutes");
const contactRoutes = require("./routes/contactRoutes");
const app = express();

app.use(cors());
app.use(express.json());

// DB connect
connectDB();
app.use("/api/aptitude-feedback", aptitudeFeedbackRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/student/profile", studentProfileRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/ranking", rankingRoutes);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/api/recruiter", recruiterRoutes);
app.use("/api/aptitude", aptitudeRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/contact", contactRoutes);
app.get("/", (req, res) => {
  res.send("Smart Placement Hub Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});