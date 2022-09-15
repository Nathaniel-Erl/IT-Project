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
  res.json({ message: 'Create Quiz Pop out ' })
})
router.get('/all-quizzes', async (req, res) => {
  const username = req.originalUrl.split('/')[1]
  try {
    const user = await User.findOne({ username: username })

    if (user == null) {
      res.send(400)
    }

    //all the quizzes made by a user
    const quizzes = await Quiz.find({ createdBy: user._id })
    console.log(quizzes)

    res.send(200)
  } catch (error) {
    console.log(error)
    res.status(400)
    return
  }
})

router.get('/:quiz-id', (req, res) => {
  res.json({ message: 'view particular quiz questions only' })
})

router.get('/:quiz_id/attempt', (req, res) => {
  res.json({ message: 'attempt particular quiz ' })
})

router.get('/settings', (req, res) => {
  res.json({ message: 'User settings ' })
})

router.post('/create-quiz', async (req, res) => {
  const { subject, description, createdDate, questions } = req.body

  const username = req.originalUrl.split('/')[1]
  const user = await User.findOne({ username: username })
  const createdBy = user._id

  try {
    const newQuiz = await Quiz.create({
      subject,
      description,
      createdBy,
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
