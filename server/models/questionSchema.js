import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
  quizID: { type: String, requried: true, unique: true },
  question: { type: String, requried: true },
  correctAnswer: [String],
  options: [String],
})

const question = mongoose.model('question', questionSchema)

export default question
