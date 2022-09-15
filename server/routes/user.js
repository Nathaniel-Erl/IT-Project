import express from 'express'
import User from '../models/userSchema.js'
import Question from '../models/questionSchema.js'
import Quiz from '../models/quizSchema.js'
import { getQuizz, createQuiz } from '../controllers/post.js'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: req.url })
})

router.get('/create-quiz', (req, res) => {
  res.json({ message: 'Create Quiz' })
})
router.get('/all-quizzes', (req, res) => {
  res.json({ message: 'View all quizzes created' })
})

router.get('/:quiz-id', (req, res) => {
  res.json({ message: 'view particular quiz questions only' })
})

router.get('/quiz-id/attempt', (req, res) => {
  res.json({ message: 'attempt particular quiz ' })
})

router.get('/settings', (req, res) => {
  res.json({ message: 'User settings ' })
})

router.post('/sign-up', async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body

  try {
    const newUser = await User.create({
      username,
      firstName,
      lastName,
      email,
      password,
    })
    res.send(req.body)
    console.log(username, firstName, lastName, email, password)
  } catch (error) {
    console.log(error)
    res.send(req.body)

    return
  }
})

router.post('/create-quiz', async (req, res) => {
  const { subject, description, createdDate, questions } = req.body

  console.log(req.originalUrl.split('/'))
  try {
    const newQuiz = await Quiz.create({
      subject,
      description,
      createdDate,
      questions,
    })
    res.send(req.body)
  } catch (error) {
    console.log(error)
    res.send(400)
  }
})
export default router
