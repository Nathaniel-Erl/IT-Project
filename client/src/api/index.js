import axios from "axios";
import { authHeader } from "../actions/auth.js";
const url = "https://quizy-it-project.herokuapp.com/";
//const local = "http://localhost:5000";
const API = axios.create({ baseURL: url });

// quiz
export const fetchQuizzes = () =>
  API.get("/api/quiz", {
    headers: authHeader(),
  });
export const createQuiz = (newQuiz) =>
  API.post("/api/quiz", newQuiz, {
    headers: authHeader(),
  });
export const deleteQuiz = (id) =>
  API.delete(`/api/quiz/${id}`, {
    headers: authHeader(),
  });
export const updateQuiz = (id, updatedQuiz) =>
  API.patch(`/api/quiz/${id}`, updatedQuiz, {
    headers: authHeader(),
  });

// question
export const getAllQuestions = (quizId) =>
  API.get(`/api/quiz/${quizId}`, {
    headers: authHeader(),
  });
export const createQuestion = (newQuestion) =>
  API.post("/api/createquestion", newQuestion, {
    headers: authHeader(),
  });
export const deleteQuestion = (quizId, questionId) =>
  API.delete(`/api/quiz/${quizId}/${questionId}`, {
    headers: authHeader(),
  });

// auth

export const updateQuestion = (quizId, questionId, updatedQuestion) =>
  API.patch(`/api/quiz/${quizId}/${questionId}`, updatedQuestion, {
    headers: authHeader(),
  });

// auth
export const logIn = (formData) => API.post("/api/", formData);
export const signUp = (formData) => API.post("/api/signup", formData);
