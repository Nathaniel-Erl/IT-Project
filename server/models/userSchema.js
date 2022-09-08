import mongoose from 'mongoose'
import quiz from './quizSchema.js'

const userSchema = mongoose.Schema({
  firstName: { type: String, requried: true },
  lastName: { type: String, requried: true },
  email: { type: String, requried: true },
  username: { type: String, requried: true, unique: true },
  password: { type: String, requried: true },
  quizzes: [quiz.schema],
})

const user = mongoose.model('user', userSchema)

export default user
