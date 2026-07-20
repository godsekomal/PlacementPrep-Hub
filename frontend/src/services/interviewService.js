import axiosInstance from "../utils/axiosInstance";

export const startInterview = async (interviewType, role, difficulty) => {
  const res = await axiosInstance.post("/api/interview/start", {
    interviewType,
    role,
    difficulty,
  });

  return res.data;
};

export const submitInterviewAnswer = async (
  sessionId,
  questionIndex,
  answer,
  timeTaken
) => {
  const res = await axiosInstance.post("/api/interview/submit", {
    sessionId,
    questionIndex,
    answer,
    timeTaken,
  });

  return res.data;
};

export const getInterviewReport = async () => {
  const res = await axiosInstance.get("/api/interview/my-report");

  return res.data;
};