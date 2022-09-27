import express from "express";
import { accessCreateQuestion, createQuestion, getAllQuestions } from "../controllers/questionController.js";

const router = express.Router();

router.get("/quiz/:quizId", getAllQuestions);
router.get("/createquestion", accessCreateQuestion)
router.post("/createquestion", createQuestion)

export default router;