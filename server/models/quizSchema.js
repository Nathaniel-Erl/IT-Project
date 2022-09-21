import mongoose, { Schema } from 'mongoose'
// import multipleChoice from './multipleChoiceSchema.js'
// import shortAnswer from './shortAnswerSchema.js'
import Question from './questionSchema.js'

const quizSchema = mongoose.Schema({
  subject: { type: String, required: true },
  description: { type: String, required: false },
  createdBy: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  image: {type:String,required:true},
  questions: [{ type: Question.schema, required: true }],
  
})

const Quiz = mongoose.model('quiz', quizSchema)

export default Quiz
