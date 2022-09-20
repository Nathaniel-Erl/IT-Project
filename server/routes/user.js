import express from 'express'

import {
  getQuiz,
  createQuiz,
  markQuiz,
  getAllQuizzes,
} from '../controllers/userController.js'

const router = express.Router()

router.get('/', (req, res) => {


  res.json({ message: req.url })

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
