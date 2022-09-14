import mongoose from 'mongoose'
import quiz from './quizSchema.js'

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  quizzes: [{ type: quiz.schema, required: false }],
})

const User = mongoose.model('user', userSchema)

export default User
