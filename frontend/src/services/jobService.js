import axiosInstance from "../utils/axiosInstance";

export const getAllJobs = async () => {
  const res = await axiosInstance.get("/api/jobs");
  return res.data;
};