import mongoose, { Schema } from 'mongoose'
import Question from './questionSchema.js'

const quizSchema = mongoose.Schema({
  subject: { type: String, required: true },
  description: { type: String, required: false },
  createdBy: { type: String, required: true },
  image: {type: String, required: false},
  questions: [Question.schema],
})

const Quiz = mongoose.model('quiz', quizSchema)

export default Quiz
