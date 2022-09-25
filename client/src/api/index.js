import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

// quiz
export const fetchQuizzes = () => API.get("/quiz");
export const createQuiz = (newQuiz) => API.post("/quiz", newQuiz);
export const deleteQuiz = (id) => API.delete(`/quiz/${id}`);
export const updateQuiz = (id, updatedQuiz) =>
  API.patch(`/quiz/${id}`, updatedQuiz);

// auth
export const logIn = (formData) => API.post("/login", formData);
export const signUp = (formData) => API.post("/signup", formData);

// question
export const fetchQuestion = () => API.get("/quiz");
export const createQuestion = (newQuiz) => API.post("/quiz", newQuiz);
export const deleteQuestion = (id) => API.delete(`/quiz/${id}`);
export const updateQuestion = (id, updatedQuiz) =>
  API.patch(`/quiz/${id}`, updatedQuiz);
