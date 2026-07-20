import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllJobs, getRanking } from "../../services/recruiterService";

export default function RecruiterDashboard() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [rankingData, setRankingData] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    alert("Logged out!");
    navigate("/login");
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getAllJobs();
        setJobs(data);
      } catch (error) {
        alert("Failed to load jobs");
      }
    };

    fetchJobs();
  }, []);

  const handleRanking = async (jobId) => {
    try {
      const data = await getRanking(jobId);
      setRankingData(data);
    } catch (error) {
      alert(error.response?.data?.message || "Ranking failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Recruiter Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>

      <h2>Jobs Posted</h2>

      {jobs.length === 0 ? (
        <p>No jobs posted</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job._id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <h3>{job.title}</h3>
            <p><b>Company:</b> {job.companyName}</p>
            <button onClick={() => handleRanking(job._id)}>
              Generate Ranking
            </button>
          </div>
        ))
      )}

      {rankingData && (
        <div style={{ marginTop: "30px" }}>
          <h2>Ranking Result</h2>
          <h3>{rankingData.jobTitle} - {rankingData.companyName}</h3>

          {rankingData.rankingList.map((student) => (
            <div
              key={student.studentId}
              style={{
                border: "1px solid green",
                padding: "10px",
                margin: "10px 0",
              }}
            >
              <p><b>Rank:</b> {student.rank}</p>
              <p><b>Name:</b> {student.name}</p>
              <p><b>Email:</b> {student.email}</p>
              <p><b>CGPA:</b> {student.cgpa}</p>
              <p><b>Score:</b> {student.score}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}