import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInterviewReport } from "../../services/interviewService";
import { getAptitudeReport } from "../../services/aptitudeService";
import "./AIFeedback.css";

export default function AIFeedback() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("interview");

  const [interviewReports, setInterviewReports] = useState([]);
  const [aptitudeReports, setAptitudeReports] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const interviewData = await getInterviewReport();
        const aptitudeData = await getAptitudeReport();

        setInterviewReports(interviewData || []);
        setAptitudeReports(aptitudeData || []);
      } catch (error) {
        console.log("AI Feedback Data Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbackData();
  }, []);

  const totalInterviews = interviewReports.length;

  const interviewScores = interviewReports.map((report) => {
    const totalQuestions = report.questions?.length || 1;
    const maxScore = totalQuestions * 8;
    const percentage =
      maxScore > 0
        ? Math.round((report.totalScore / maxScore) * 100)
        : 0;

    return percentage;
  });

  const avgInterviewScore =
    interviewScores.length > 0
      ? Math.round(
          interviewScores.reduce((sum, score) => sum + score, 0) /
            interviewScores.length
        )
      : 0;

  const bestInterviewScore =
    interviewScores.length > 0 ? Math.max(...interviewScores) : 0;

  const latestInterview = interviewReports[0];

  const communicationScore =
    latestInterview?.questions?.length > 0
      ? Math.min(
          100,
          Math.round(
            (latestInterview.questions.filter(
              (q) => q.answer && q.answer.length > 30
            ).length /
              latestInterview.questions.length) *
              100
          )
        )
      : 0;

  const confidenceScore =
    latestInterview?.totalTimeTaken > 0
      ? Math.max(
          40,
          Math.min(100, 100 - latestInterview.totalTimeTaken)
        )
      : 0;

  const technicalScore = avgInterviewScore;

 const totalAptitudeTests = aptitudeReports.length;

const aptitudeScores = aptitudeReports.map((report) => {
  return Math.round(Number(report.percentage) || 0);
});

const avgAptitudeScore =
  aptitudeScores.length > 0
    ? Math.round(
        aptitudeScores.reduce((sum, score) => sum + score, 0) /
          aptitudeScores.length
      )
    : 0;

const topicPerformance = aptitudeReports.reduce((acc, report) => {
  const topic = report.topic || "General";

  if (!acc[topic]) {
    acc[topic] = {
      topic,
      totalPercentage: 0,
      count: 0,
    };
  }

  acc[topic].totalPercentage += Number(report.percentage) || 0;
  acc[topic].count += 1;

  return acc;
}, {});

const topicData = Object.values(topicPerformance).map((item) => ({
  topic: item.topic,
  score:
    item.count > 0
      ? Math.round(item.totalPercentage / item.count)
      : 0,
}));

  const strongTopics = topicData.filter((item) => item.score >= 70);
  const weakTopics = topicData.filter((item) => item.score < 70);

  if (loading) {
    return (
      <div className="ai-feedback-page">
        <button className="simple-back" onClick={() => navigate("/")}>
  ← Back
</button>
        <div className="ai-hero">
          <h1>
            AI <span>Feedback</span>
          </h1>
          <p>Loading your feedback...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ai-feedback-page">
       <button className="simple-back" onClick={() => navigate("/")}>
      ← Back
    </button>
      <div className="ai-hero">
        <h1>
          AI <span>Feedback</span>
        </h1>

        <p>
          Analyze your interview performance and aptitude progress using your
          real practice data.
        </p>
      </div>

      <div className="ai-tabs">
        <button
          className={activeTab === "interview" ? "active-tab" : ""}
          onClick={() => setActiveTab("interview")}
        >
          Interview Feedback
        </button>

        <button
          className={activeTab === "aptitude" ? "active-tab" : ""}
          onClick={() => setActiveTab("aptitude")}
        >
          Aptitude Feedback
        </button>
      </div>

      {activeTab === "interview" && (
        <div className="feedback-card">
          <h2>Interview Performance</h2>

          {totalInterviews === 0 ? (
            <div className="empty-box">
              <h3>No interview data found</h3>
              <p>
                Complete at least one mock interview to generate AI feedback.
              </p>
            </div>
          ) : (
            <>
              <div className="summary-grid">
                <div className="summary-box">
                  <h3>Total Interviews</h3>
                  <span>{totalInterviews}</span>
                </div>

                <div className="summary-box">
                  <h3>Average Score</h3>
                  <span>{avgInterviewScore}%</span>
                </div>

                <div className="summary-box">
                  <h3>Best Score</h3>
                  <span>{bestInterviewScore}%</span>
                </div>
              </div>

              <div className="chart-box">
                <h3>Latest Interview Skill Breakdown</h3>

                <div
                  className="pie-chart"
                  style={{
                    background: `conic-gradient(
                      #691883 0% ${communicationScore}%,
                      #b148d2 ${communicationScore}% ${
                      communicationScore + confidenceScore / 2
                    }%,
                      #e79aff ${
                        communicationScore + confidenceScore / 2
                      }% 100%
                    )`,
                  }}
                ></div>

                <div className="legend-grid">
                  <p>
                    <span className="dot communication"></span>
                    Communication - {communicationScore}%
                  </p>
                  <p>
                    <span className="dot confidence"></span>
                    Confidence - {confidenceScore}%
                  </p>
                  <p>
                    <span className="dot technical"></span>
                    Technical Accuracy - {technicalScore}%
                  </p>
                </div>
              </div>

              <div className="bar-chart-box">
                <h3>Interview Progress</h3>

                {interviewScores.slice(-5).map((score, index) => (
                  <div className="bar-row" key={index}>
                    <p>Interview {index + 1}</p>

                    <div className="bar-bg">
                      <div
                        className="bar-fill"
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>

                    <span>{score}%</span>
                  </div>
                ))}
              </div>

              <div className="feedback-grid">
                <div>
                  <h3>Strengths</h3>
                  {avgInterviewScore >= 70 ? (
                    <>
                      <p>✔ Good answer quality</p>
                      <p>✔ Clear communication flow</p>
                      <p>✔ Consistent mock interview practice</p>
                    </>
                  ) : (
                    <>
                      <p>✔ You have started practicing</p>
                      <p>✔ Interview attempts are being tracked</p>
                      <p>✔ Feedback data is available for improvement</p>
                    </>
                  )}
                </div>

                <div>
                  <h3>Areas to Improve</h3>
                  {avgInterviewScore >= 70 ? (
                    <>
                      <p>❌ Add more technical depth</p>
                      <p>❌ Use project-based examples</p>
                      <p>❌ Improve answer structure</p>
                    </>
                  ) : (
                    <>
                      <p>❌ Write longer and complete answers</p>
                      <p>❌ Practice communication regularly</p>
                      <p>❌ Explain concepts with examples</p>
                    </>
                  )}
                </div>
              </div>

              <div className="recommendation">
                <h3>AI Recommendation</h3>
                <p>
                  {avgInterviewScore >= 70
                    ? "Your interview performance is good. Focus on adding real project examples and technical explanations to improve further."
                    : "Practice mock interviews daily. Try to answer each question in 4-5 lines using introduction, explanation and example format."}
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {activeTab === "aptitude" && (
        <div className="feedback-card">
          <h2> Aptitude Performance</h2>

          {totalAptitudeTests === 0 ? (
            <div className="empty-box">
              <h3>No aptitude data found</h3>
              <p>
                Complete aptitude tests using backend test module to generate
                topic-wise feedback.
              </p>
            </div>
          ) : (
            <>
              <div className="summary-grid">
                <div className="summary-box">
                  <h3>Total Tests</h3>
                  <span>{totalAptitudeTests}</span>
                </div>

                <div className="summary-box">
                  <h3>Average Score</h3>
                  <span>{avgAptitudeScore}%</span>
                </div>

                <div className="summary-box">
                  <h3>Topics Practiced</h3>
                  <span>{topicData.length}</span>
                </div>
              </div>

              <div className="bar-chart-box">
                <h3>Topic-wise Performance</h3>

                {topicData.map((item, index) => (
                  <div className="bar-row" key={index}>
                    <p>{item.topic}</p>

                    <div className="bar-bg">
                      <div
                        className={
                          item.score >= 70 ? "bar-fill" : "bar-fill weak"
                        }
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>

                    <span>{item.score}%</span>
                  </div>
                ))}
              </div>

              <div className="feedback-grid">
                <div>
                  <h3>Strong Topics</h3>

                  {strongTopics.length > 0 ? (
                    strongTopics.map((item, index) => (
                      <p key={index}>✔ {item.topic}</p>
                    ))
                  ) : (
                    <p>No strong topics yet</p>
                  )}
                </div>

                <div>
                  <h3>Weak Topics</h3>

                  {weakTopics.length > 0 ? (
                    weakTopics.map((item, index) => (
                      <p key={index}>❌ {item.topic}</p>
                    ))
                  ) : (
                    <p>No weak topics found</p>
                  )}
                </div>
              </div>

              <div className="recommendation">
                <h3>AI Recommendation</h3>
                <p>
                  {avgAptitudeScore >= 70
                    ? "Your aptitude performance is good. Continue timed practice and revise formulas weekly."
                    : "Focus on weak topics first. Solve 15-20 questions daily and retake tests to improve accuracy."}
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}