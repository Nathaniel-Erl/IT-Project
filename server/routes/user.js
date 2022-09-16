import express from 'express'
import User from '../models/userSchema.js'
import Question from '../models/questionSchema.js'
import Quiz from '../models/quizSchema.js'
import {
  getQuiz,
  createQuiz,
  markQuiz,
  getAllQuizzes,
} from '../controllers/user.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: req.url })
})

router.get('/create-quiz', (req, res) => {
  res.json({ message: 'Create Quiz Pop out ' })
})
router.get('/all-quizzes', getAllQuizzes)

router.get('/:quizID', getQuiz)

router.post('/:quizID/attempt', markQuiz)

router.get('/settings', (req, res) => {
  res.json({ message: 'User settings ' })
})

router.post('/create-quiz', createQuiz)
export default router
