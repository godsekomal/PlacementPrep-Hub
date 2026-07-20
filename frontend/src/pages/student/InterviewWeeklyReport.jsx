import { useEffect, useState } from "react";
import { getInterviewReport } from "../../services/interviewService";

export default function InterviewWeeklyReport() {
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
      <h2>Weekly Interview Report</h2>

      {reports.length === 0 ? (
        <p>No interview sessions attempted yet.</p>
      ) : (
        reports.map((r) => (
          <div
            key={r._id}
            style={{
              border: "1px solid gray",
              padding: "15px",
              margin: "15px 0",
              borderRadius: "10px",
            }}
          >
            <h3>Role: {r.role}</h3>

            <p>
              <b>Interview Type:</b> {r.interviewType}
            </p>

            <p>
              <b>Difficulty:</b> {r.difficulty}
            </p>

            <p>
              <b>Total Score:</b> {r.totalScore}
            </p>

            <p>
              <b>Total Questions:</b> {r.questions.length}
            </p>

            <p>
              <b>Total Time Taken:</b> {r.totalTimeTaken} seconds
            </p>

            <p>
              <b>Date:</b> {new Date(r.createdAt).toLocaleString()}
            </p>

            <hr />

            <h4>Question Details:</h4>

            {r.questions.map((q, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid lightgray",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "8px",
                }}
              >
                <p>
                  <b>Q{index + 1}:</b> {q.question}
                </p>

                <p>
                  <b>Your Answer:</b> {q.answer ? q.answer : "Not Answered"}
                </p>

                <p>
                  <b>Score:</b> {q.score}
                </p>

                <p>
                  <b>Feedback:</b> {q.feedback ? q.feedback : "No feedback"}
                </p>

                <p>
                  <b>Time Taken:</b> {q.timeTaken} sec
                </p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}