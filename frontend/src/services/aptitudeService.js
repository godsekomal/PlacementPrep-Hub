import axiosInstance from "../utils/axiosInstance";

export const getAptitudeReport = async () => {
  const res = await axiosInstance.get("/api/aptitude-feedback/report");

  return res.data;
};