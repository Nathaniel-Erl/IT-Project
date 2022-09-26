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
router.get('/', getAllQuizzes)

//router.post('/quiz/:id/attempt', markQuiz)

// create quiz
router.post("/", createQuiz);

// delete quiz
router.delete('/:id', deleteQuiz)

// update quiz
router.patch('/:id', updateQuiz)


export default router
