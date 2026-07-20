import axiosInstance from "../utils/axiosInstance";

export const registerUser = async (formData) => {
  const res = await axiosInstance.post("/api/auth/register", formData);
  return res.data;
};

export const loginUser = async (formData) => {
  const res = await axiosInstance.post("/api/auth/login", formData);
  return res.data;
};