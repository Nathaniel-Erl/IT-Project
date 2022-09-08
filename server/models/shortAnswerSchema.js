import mongoose from 'mongoose'

const shortAnswerSchema = mongoose.Schema({
  question: { type: String, requried: true },
  modelAnswer: { type: String, requried: true },
  givenAnswers: [{ type: String, requreied: false }],
})

const shortAnswer = mongoose.model('shortAnswer', shortAnswerSchema)

export default shortAnswer
