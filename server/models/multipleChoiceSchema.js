import mongoose from 'mongoose'

const multipleChoiceSchema = mongoose.Schema({
  question: { type: String, requried: true },
  correctAnswer: { type: String, requried: true },
  answers: [String],
})

const multipleChoice = mongoose.model('multipleChoice', multipleChoiceSchema)

export default multipleChoice
