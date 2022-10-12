import axios from "axios";
import { authHeader } from "../actions/auth.js";
const url = "https://quizy-it-project.herokuapp.com/";
const local = "http://localhost:5000";
const API = axios.create({ baseURL: local });
// quiz
export const fetchQuizzes = () =>
  API.get("/quiz", {
    headers: authHeader(),
  });
export const createQuiz = (newQuiz) =>
  API.post("/quiz", newQuiz, {
    headers: authHeader(),
  });
export const deleteQuiz = (id) =>
  API.delete(`/quiz/${id}`, {
    headers: authHeader(),
  });
export const updateQuiz = (id, updatedQuiz) =>
  API.patch(`/quiz/${id}`, updatedQuiz, {
    headers: authHeader(),
  });

// question
export const getAllQuestions = (quizId) =>
  API.get(`/quiz/${quizId}`, {
    headers: authHeader(),
  });
export const createQuestion = (newQuestion) =>
  API.post("/createquestion", newQuestion, {
    headers: authHeader(),
  });
export const deleteQuestion = (quizId, questionId) =>
  API.delete(`/quiz/${quizId}/${questionId}`, {
    headers: authHeader(),
  });

// auth
export const logIn = (formData) => API.post("/", formData);
export const signUp = (formData) => API.post("/signup", formData);
