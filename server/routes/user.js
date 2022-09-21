import express from 'express'

import {
  getQuiz,
  createQuiz,
  markQuiz,
  getAllQuizzes,
} from '../controllers/userController.js'

const router = express.Router()




router.get('/quiz', getAllQuizzes)

router.get('/:quizID', getQuiz)

router.post('/quiz/:id/attempt', markQuiz)

router.get('/quiz/:id', )

router.get('/settings', (req, res) => {
  res.json({ message: 'User settings ' })
})

router.post('/quiz', createQuiz)

export default router
