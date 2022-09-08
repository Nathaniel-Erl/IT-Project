import express from 'express'
import { getQuizz, createQuiz } from '../controllers/post.js'
const router = express.Router()

router.get('/', getQuizz)
router.post('/', createQuiz)

export default router
