import express from 'express'

import user from '../models/userSchema.js'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ mesage: 'LANDING PAGE' })
})

router.get('/login', (req, res) => {
  res.json({ message: 'LOGIN IN' })
})

router.get('/sign-up', async (req, res) => {
  const { username, first, last, email, password } = req.body
  console.log(username, first, last, email, password)
  try {
    const newUser = await user.create({
      username,
      first,
      last,
      email,
      password,
    })
    res.send(200).json(newUser)
    console.log(username, first, last, email, password)
  } catch (error) {
    res.send(400).json(error)
  }
})

router.get('/about-us', (req, res) => {
  res.json({ message: 'ABOUT US PAGE' })
})

export default router
