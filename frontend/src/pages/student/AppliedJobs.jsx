import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

export default function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axiosInstance.get("/api/applications/my");
        setAppliedJobs(res.data);
      } catch (error) {
        alert("Failed to load applied jobs");
      }
    };

    fetchAppliedJobs();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Applied Jobs</h2>

      {appliedJobs.length === 0 ? (
        <p>No applied jobs</p>
      ) : (
        appliedJobs.map((app) => (
          <div
            key={app._id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <h3>{app.jobId.title}</h3>
            <p><b>Company:</b> {app.jobId.companyName}</p>
            <p><b>Status:</b> {app.status}</p>
            <p><b>AI Score:</b> {app.aiScore}</p>
          </div>
        ))
      )}
    </div>
  );
}