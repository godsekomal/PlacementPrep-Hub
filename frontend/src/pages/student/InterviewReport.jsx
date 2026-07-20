import { useEffect, useState } from "react";
import { getInterviewReport } from "../../services/interviewService";

export default function InterviewReport() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const data = await getInterviewReport();
      setReports(data);
    };
    fetchReports();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Interview Reports</h2>

      {reports.length === 0 ? (
        <p>No interview sessions found.</p>
      ) : (
        reports.map((r) => (
          <div
            key={r._id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <h3>{r.interviewType} Interview</h3>
            <p><b>Role:</b> {r.role}</p>
            <p><b>Difficulty:</b> {r.difficulty}</p>
            <p><b>Total Score:</b> {r.totalScore}</p>
            <p><b>Total Time:</b> {r.totalTimeTaken} seconds</p>
            <p><b>Date:</b> {new Date(r.createdAt).toLocaleString()}</p>

            <hr />

            <h4>Questions:</h4>
            {r.questions.map((q, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <p><b>Q:</b> {q.question}</p>
                <p><b>Ans:</b> {q.answer || "Not Answered"}</p>
                <p><b>Score:</b> {q.score}</p>
                <p><b>Feedback:</b> {q.feedback}</p>
                <p><b>Time Taken:</b> {q.timeTaken} sec</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}