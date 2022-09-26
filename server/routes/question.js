import express from "express";
import { getAllQuestions } from "../controllers/questionController.js";

const router = express.Router();

router.get("/quiz/:quizId", getAllQuestions);

export default router;