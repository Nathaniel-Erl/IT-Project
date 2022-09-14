import express from 'express'

import User from '../models/userSchema.js'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ mesage: 'LANDING PAGE' })
})

router.get('/login', (req, res) => {
  res.json({ message: 'LOGIN IN' })
})

router.post('/sign-up', async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body
  console.log(username, firstName, lastName, email, password)
  try {
    const newUser = await User.create({
      username,
      firstName,
      lastName,
      email,
      password,
    })
    res.send(200).json(newUser)
    console.log(username, firstName, lastName, email, password)
  } catch (error) {
    res.send(400).json(error)
  }
})

router.get('/about-us', (req, res) => {
  res.json({ message: 'ABOUT US PAGE' })
})

export default router
