import mongoose from 'mongoose'
// import multipleChoice from './multipleChoiceSchema.js'
// import shortAnswer from './shortAnswerSchema.js'
import Question from './questionSchema.js'

const quizSchema = mongoose.Schema({
  subject: { type: String, required: true },
  description: { type: String, required: false },
  createdDate: { type: Date, default: new Date() },

  //this way or this way
  //   multipleChoiceQuestions: { type: [multipleChoice.schema] },
  //   shortAnswerQuestions: { type: [shortAnswer.schema] },

  //or this way
  questions: [{ type: Question.schema, required: true }],
})

const Quiz = mongoose.model('quiz', quizSchema)

export default Quiz
