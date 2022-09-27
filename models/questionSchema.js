import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
  question: { type: String, required: true },
  type: {type: String, required: true},
  correctAnswer: [{ type: String, required: true }],
  incorrectAnswer: [String],
})

const Question = mongoose.model('question', questionSchema)

export default Question
