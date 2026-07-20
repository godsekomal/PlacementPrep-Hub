import axiosInstance from "../utils/axiosInstance";

export const getAllJobs = async () => {
  const res = await axiosInstance.get("/api/jobs");
  return res.data;
};

export const getRanking = async (jobId) => {
  const res = await axiosInstance.get(`/api/ranking/${jobId}`);
  return res.data;
};