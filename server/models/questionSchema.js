import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
  question: { type: String, required: true },
  correctAnswer: [{ type: String, required: true }],
  options: [String],
  dateCreated: { type: Date, default: new Date() },
})

const Question = mongoose.model('question', questionSchema)

export default Question
