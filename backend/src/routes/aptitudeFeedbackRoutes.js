const express = require("express");

const protect = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

const {
  saveTopicResult,
  getTopicResults,
} = require("../controllers/aptitudeFeedbackController");

const router = express.Router();

router.post(
  "/save",
  protect,
  roleCheck("student"),
  saveTopicResult
);

router.get(
  "/report",
  protect,
  roleCheck("student"),
  getTopicResults
);

module.exports = router;