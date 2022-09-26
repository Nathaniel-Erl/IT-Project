import express from 'express'

import {
  createQuiz,
  markQuiz,
  getAllQuizzes,
  deleteQuiz,
  updateQuiz,
} from '../controllers/quizController.js'

const router = express.Router()

// fetch all quizzes
router.get('/quiz', getAllQuizzes)

//router.post('/quiz/:id/attempt', markQuiz)

// create quiz
router.post("/quiz", createQuiz);

// delete quiz
router.delete('/quiz/:id', deleteQuiz)

// update quiz
router.patch('/quiz/:id', updateQuiz)


export default router
