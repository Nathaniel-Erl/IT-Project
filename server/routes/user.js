import express from 'express'

import {
  getQuiz,
  createQuiz,
  markQuiz,
  getAllQuizzes,
  deleteQuiz
} from '../controllers/userController.js'

const router = express.Router()

router.get('/quiz', getAllQuizzes)

router.get('/quiz/:id', getQuiz)

router.post('/quiz/:id/attempt', markQuiz)

router.delete('/quiz/:id', deleteQuiz)

router.get('/settings', (req, res) => {
  res.json({ message: 'User settings ' })
})

router.post('/quiz', createQuiz)

export default router
