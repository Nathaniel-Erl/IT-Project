import axios from "axios";
const url = "https://quizy-it-project.herokuapp.com/";
const local = "http://localhost:5000";
const API = axios.create({ baseURL: local });
// quiz
export const fetchQuizzes = () => API.get("/quiz");
export const createQuiz = (newQuiz) => API.post("/quiz", newQuiz);
export const deleteQuiz = (id) => API.delete(`/quiz/${id}`);
export const updateQuiz = (id, updatedQuiz) =>
  API.patch(`/quiz/${id}`, updatedQuiz);

// question
export const getAllQuestions = (quizId) => API.get(`/quiz/${quizId}`);
export const createQuestion = (newQuestion) =>
  API.post("/createquestion", newQuestion);
export const deleteQuestion = (quizId, questionId) =>
  API.delete(`/quiz/${quizId}/${questionId}`);

// auth
export const logIn = (formData) => API.post("/", formData);
export const signUp = (formData) => API.post("/signup", formData);
