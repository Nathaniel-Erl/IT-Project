import mongoose, { Schema } from 'mongoose'
// import multipleChoice from './multipleChoiceSchema.js'
// import shortAnswer from './shortAnswerSchema.js'
import Question from './questionSchema.js'

const quizSchema = mongoose.Schema({
  subject: { type: String, required: true },
  description: { type: String, required: false },
  createdBy: { type: String, required: true },
  image: {type: String, required: false},
  questions: [{ type: Question.schema, required: false }],
})

const Quiz = mongoose.model('quiz', quizSchema)

export default Quiz
