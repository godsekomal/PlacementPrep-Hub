import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAptitudeReport } from "../../services/aptitudeService";
import { getInterviewReport } from "../../services/interviewService";
import "./WeeklyReport.css";

export default function WeeklyReport() {
  const navigate = useNavigate();
  const [aptitudeReports, setAptitudeReports] = useState([]);
  const [interviewReports, setInterviewReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const aptitudeData = await getAptitudeReport();
        const interviewData = await getInterviewReport();

        setAptitudeReports(aptitudeData || []);
        setInterviewReports(interviewData || []);
      } catch (error) {
        console.log("Weekly Report Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  const aptitudeScores = aptitudeReports.map((report) =>
    Math.round(Number(report.percentage) || 0)
  );

  const averageAptitude =
    aptitudeScores.length > 0
      ? Math.round(
          aptitudeScores.reduce((sum, score) => sum + score, 0) /
            aptitudeScores.length
        )
      : 0;

  const interviewScores = interviewReports.map((report) => {
    const totalQuestions = report.questions?.length || 1;
    const maxScore = totalQuestions * 8;

    return maxScore > 0
      ? Math.round((report.totalScore / maxScore) * 100)
      : 0;
  });

  const averageInterview =
    interviewScores.length > 0
      ? Math.round(
          interviewScores.reduce((sum, score) => sum + score, 0) /
            interviewScores.length
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
    percentage: Math.round(item.totalPercentage / item.count),
  }));

  const strongTopics = topicData.filter((item) => item.percentage >= 70);
  const weakTopics = topicData.filter((item) => item.percentage < 70);

  const bestAptitude =
    aptitudeScores.length > 0 ? Math.max(...aptitudeScores) : 0;

  const bestInterview =
    interviewScores.length > 0 ? Math.max(...interviewScores) : 0;

  const latestReports = [...aptitudeReports]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  if (loading) {
    return (
      <div className="weekly-page">
        <button className="simple-back" onClick={() => navigate("/")}>
        ← Back
      </button>
        <div className="weekly-hero">
          <h1>
            Weekly <span>Report</span>
          </h1>
          <p>Loading your weekly performance...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="weekly-page">
       <button className="simple-back" onClick={() => navigate("/")}>
      ← Back
    </button>
      <div className="weekly-hero">
        <h1>
          Weekly <span>Report</span>
        </h1>

        <p>
          Track your aptitude practice, mock interview performance, strong
          topics, weak areas and weekly improvement suggestions.
        </p>
      </div>

      <div className="report-grid">
        <div className="report-card">
          <h3>Aptitude Tests</h3>
          <h2>{aptitudeReports.length}</h2>
          <p>Total topic tests attempted</p>
        </div>

        <div className="report-card">
          <h3>Mock Interviews</h3>
          <h2>{interviewReports.length}</h2>
          <p>Total mock interviews completed</p>
        </div>

        <div className="report-card">
          <h3>Avg Aptitude Score</h3>
          <h2>{averageAptitude}%</h2>
          <p>Overall aptitude performance</p>
        </div>

        <div className="report-card">
          <h3>Avg Interview Score</h3>
          <h2>{averageInterview}%</h2>
          <p>Overall interview performance</p>
        </div>
      </div>

      <div className="weekly-section">
        <h2>📈 Performance Overview</h2>

        <div className="overview-grid">
          <div className="overview-card">
            <h3>Best Aptitude Score</h3>
            <span>{bestAptitude}%</span>
          </div>

          <div className="overview-card">
            <h3>Best Interview Score</h3>
            <span>{bestInterview}%</span>
          </div>

          <div className="overview-card">
            <h3>Topics Practiced</h3>
            <span>{topicData.length}</span>
          </div>
        </div>
      </div>

      <div className="weekly-section">
        <h2>📊 Topic-wise Performance</h2>

        {topicData.length === 0 ? (
          <div className="empty-box">
            <p>No aptitude topic tests attempted yet.</p>
          </div>
        ) : (
          <div className="topic-chart">
            {topicData.map((item, index) => (
              <div className="bar-row" key={index}>
                <p>{item.topic}</p>

                <div className="bar-bg">
                  <div
                    className={
                      item.percentage >= 70 ? "bar-fill" : "bar-fill weak"
                    }
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>

                <span>{item.percentage}%</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="weekly-two-column">
        <div className="weekly-section">
          <h2>🎯 Strong Topics</h2>

          {strongTopics.length === 0 ? (
            <p className="muted">No strong topics yet.</p>
          ) : (
            strongTopics.map((item, index) => (
              <p className="topic-line strong" key={index}>
                ✔ {item.topic} - {item.percentage}%
              </p>
            ))
          )}
        </div>

        <div className="weekly-section">
          <h2>⚠ Weak Topics</h2>

          {weakTopics.length === 0 ? (
            <p className="muted">No weak topics found.</p>
          ) : (
            weakTopics.map((item, index) => (
              <p className="topic-line weak-text" key={index}>
                ❌ {item.topic} - {item.percentage}%
              </p>
            ))
          )}
        </div>
      </div>

      <div className="weekly-section">
        <h2>🕒 Recent Aptitude Tests</h2>

        {latestReports.length === 0 ? (
          <div className="empty-box">
            <p>No recent aptitude tests found.</p>
          </div>
        ) : (
          <div className="recent-list">
            {latestReports.map((report) => (
              <div className="recent-card" key={report._id}>
                <h3>{report.topic}</h3>

                <p>
                  Score: {report.score} / {report.totalQuestions}
                </p>

                <p>Percentage: {Math.round(report.percentage)}%</p>

                <small>
                  {new Date(report.createdAt).toLocaleString()}
                </small>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="recommendation-card">
        <h2>🤖 Weekly Recommendation</h2>

        <p>
          {averageAptitude >= 70
            ? "Your aptitude performance is good. Continue practicing regularly and focus on maintaining consistency."
            : "Focus on weak topics first. Solve at least 15 aptitude questions daily and retake topic tests to improve accuracy."}
        </p>

        <p>
          {averageInterview >= 70
            ? "Your interview performance is improving well. Add more project-based examples to your answers."
            : "Attempt at least 2 mock interviews this week to improve communication and confidence."}
        </p>
      </div>
    </div>
  );
}