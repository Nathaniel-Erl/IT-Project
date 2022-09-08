import mongoose from 'mongoose'
import multipleChoice from './multipleChoiceSchema.js'
import shortAnswer from './shortAnswerSchema.js'

const quizSchema = mongoose.Schema({
  subject: { type: String, requried: true },
  title: { type: String, requried: true },
  createdDate: { type: Date, default: new Date() },
  multipleChoiceQuestions: { type: [multipleChoice.schema] },
  shortAnswerQuestions: { type: [shortAnswer.schema] },
})

const quiz = mongoose.model('quiz', quizSchema)

export default quiz
