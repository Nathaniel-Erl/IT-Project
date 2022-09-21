// Create all the handlers for our routes

import Question from '../models/questionSchema.js'
import Quiz from '../models/quizSchema.js'
import User from '../models/userSchema.js'

export const createQuiz = async (req, res) => {
  const { subject, description, image } = req.body

  //const username = req.originalUrl.split('/')[1]
  //const user = await User.findOne({ username: username })
  //const createdBy = user._id
  const questions = []

  try {
    const newQuiz = await Quiz.create({
      subject,
      description,
      //createdBy: "someone",
      image,
      questions,
    })
    res.send(newQuiz)
  } catch (error) {
    console.log(error)
    res.send(400)
  }
}

export const markQuiz = async (req, res) => {
  try {
    const answers = req.body

    const quiz = await Quiz.findById(req.params['quizID'])

    const quizLength = quiz['questions'].length
    const quizQuestions = quiz['questions']

    let multipleChoice = []
    let shortAnswer = []
    let multiAnswersNotInCorrect = []

    for (let i = 0; i < quizLength; i++) {
      //multiple choice will always have more than 1 answer and shot answer will have only 1 correct answer
      if (
        quiz['questions'][i]['correctAnswer'].length +
          quiz['questions'][i]['incorrectAnswer'].length >
        1
      ) {
        console.log('e')
        multipleChoice.push({
          index: i,
          correct: quiz['questions'][i]['correctAnswer'],
          incorrect: quiz['questions'][i]['incorrectAnswer'],
        })
      } else {
        shortAnswer.push({
          index: i,
          model: quiz['questions'][i]['correctAnswer'],
        })
      }
    }

    //console.log(a.filter(x => !b.includes(x)) );
    //{ '1': [ 6 ], '2': [ 1, 2, 3 ], '3': [ 1, 2, 3 ] }
    let j = 0
    for (let i = 0; i < multipleChoice.length; i++) {
      let currentQuestionCorrect = multipleChoice[i]['correct']

      let index = multipleChoice[i]['index']
      console.log(
        answers[index].filter((x) => multipleChoice[i]['correct'].includes(x))
      )
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
  //const username = req.originalUrl.split('/')[1]
  try {
    // const user = await User.findOne({ username: username })

    // if (user == null) {
    //   res.send(400)
    // }

    //all the quizzes made by a user
    //const quizzes = await Quiz.find({ createdBy: user._id })
    const quizzes = await Quiz.find()

    res.json(quizzes)
  } catch (error) {
    console.log(error)
    res.status(400)
    return
  }
}
