import mongoose from 'mongoose'
import multipleChoice from './multipleChoiceSchema.js'
import shortAnswer from './shortAnswerSchema.js'
import question from './questionSchema.js'

const quizSchema = mongoose.Schema({
  subject: { type: String, requried: true },
  description: { type: String, requried: true },
  createdDate: { type: Date, default: new Date() },

  //this way or this way
  //   multipleChoiceQuestions: { type: [multipleChoice.schema] },
  //   shortAnswerQuestions: { type: [shortAnswer.schema] },

  //or this way
  questions: [{ type: question.schema }],
})

const quiz = mongoose.model('quiz', quizSchema)

export default quiz
