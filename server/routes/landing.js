import express from 'express'

import User from '../models/userSchema.js'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ mesage: 'LANDING PAGE' })
})

router.get('/login', (req, res) => {
  res.json({ message: 'LOGIN IN' })
})

router.get('/about-us', (req, res) => {
  res.json({ message: 'ABOUT US PAGE' })
})

export default router
