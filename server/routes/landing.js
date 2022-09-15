import express from 'express'

import User from '../models/userSchema.js'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ mesage: 'LANDING PAGE' })
})

router.get('/login', (req, res) => {
  res.json({ message: 'LOGIN IN HERE' })
})

router.get('/about-us', (req, res) => {
  res.json({ message: 'ABOUT US PAGE' })
})

router.post('/sign-up', async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body

  try {
    const newUser = await User.create({
      username,
      firstName,
      lastName,
      email,
      password,
    })
    res.send(req.body)
    console.log(username, firstName, lastName, email, password)
  } catch (error) {
    console.log(error)
    res.send(req.body)

    return
  }
})

export default router
