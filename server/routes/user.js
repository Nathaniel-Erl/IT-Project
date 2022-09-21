import express from 'express'

import {
  getQuiz,
  createQuiz,
  markQuiz,
  getAllQuizzes,
  deleteQuiz,
  updateQuiz
} from '../controllers/userController.js'

const router = express.Router()

router.get('/quiz', getAllQuizzes)

router.get('/quiz/:id', getQuiz)

router.post('/quiz/:id/attempt', markQuiz)

// delete quiz
router.delete('/quiz/:id', deleteQuiz)

// update quiz
router.patch('/quiz/:id', updateQuiz)

router.get('/settings', (req, res) => {
  res.json({ message: 'User settings ' })
})

router.post('/quiz', createQuiz)

export default router
