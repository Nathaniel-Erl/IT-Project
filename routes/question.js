import express from "express";
import { accessCreateQuestion, getAllQuestions } from "../controllers/questionController.js";

const router = express.Router();

router.get("/quiz/:quizId", getAllQuestions);
router.get("/createquestion", accessCreateQuestion)

export default router;