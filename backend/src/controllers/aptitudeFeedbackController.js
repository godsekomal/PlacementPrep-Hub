const AptitudeTopicResult = require("../models/AptitudeTopicResult");

const saveTopicResult = async (req, res) => {
  try {
    const { topic, score, totalQuestions, percentage } = req.body;

    const result = await AptitudeTopicResult.create({
      studentId: req.user._id,
      topic,
      score,
      totalQuestions,
      percentage,
    });

    res.status(201).json({
      message: "Aptitude result saved successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTopicResults = async (req, res) => {
  try {
    const results = await AptitudeTopicResult.find({
      studentId: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveTopicResult,
  getTopicResults,
};