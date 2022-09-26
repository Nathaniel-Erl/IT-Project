import express from 'express'

import {
  createQuiz,
  markQuiz,
  getAllQuizzes,
  deleteQuiz,
  updateQuiz,
  getAllQuestions
} from '../controllers/userController.js'

const router = express.Router()

router.get('/quiz', getAllQuizzes)

router.post('/quiz/:id/attempt', markQuiz)

// delete quiz
router.delete('/quiz/:id', deleteQuiz)

// update quiz
router.patch('/quiz/:id', updateQuiz)

router.get('/settings', (req, res) => {
  res.json({ message: 'User settings ' })
})

router.post('/quiz', createQuiz)

// questions
router.get('/quiz/:quizId', getAllQuestions)
export default router
