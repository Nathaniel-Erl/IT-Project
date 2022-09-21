import axios from 'axios'
const API = axios.create({ baseURL: 'http://localhost:5000' })

export const fetchQuizzes = () => API.get('/quiz')
export const createQuiz = (newQuiz) => API.post('/quiz', newQuiz)
export const deleteQuiz = (id) => API.delete(`/quiz/${id}`)
export const updateQuiz = (id, updatedQuiz) => API.patch(`/quiz/${id}`, updatedQuiz);