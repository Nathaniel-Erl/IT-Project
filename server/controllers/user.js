// Create all the handlers for our routes

import User from '../models/userSchema.js'

export const createQuiz = async (req, res) => {
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
}

export const markQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params['quizID'])
    const quizLength = quiz['questions'].length
    const quizQuestions = quiz['questions']
    const answers = req.body
    const correctQuizAnswers = [quizLength]

    for (let i = 0; i < quizLength; i++) {
      correctQuizAnswers.push(quizQuestions[i]['correctAnswer'])
    }
  } catch (error) {
    res.send(400)
    return
  }
}

export const getQuiz = async (req, res) => {
  const quizID = req.params['quizID']
  console.log(quizID)
  try {
    const quiz1 = await Quiz.findById(quizID)

    res.send(quiz1)
  } catch (error) {
    res.send(400)
    return
  }
}

export const getAllQuizzes = async (req, res) => {
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
}
