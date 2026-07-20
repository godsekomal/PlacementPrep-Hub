import axiosInstance from "../utils/axiosInstance";

export const applyJob = async (jobId) => {
  const res = await axiosInstance.post("/api/applications/apply", { jobId });
  return res.data;
};