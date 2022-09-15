import mongoose from 'mongoose'
import Question from './questionSchema.js'
import Quiz from './quizSchema.js'

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

const User = mongoose.model('user', userSchema)

export default User
