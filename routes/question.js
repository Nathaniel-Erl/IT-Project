import express from "express";
import { accessCreateQuestion, createQuestion, deleteQuestion, getAllQuestions, updateQuestions } from "../controllers/questionController.js";

const router = express.Router();

router.get("/quiz/:quizId", getAllQuestions);
router.get("/createquestion", accessCreateQuestion)
router.post("/createquestion", createQuestion)
router.delete("/quiz/:quizId/:questionId", deleteQuestion)
router.patch("/quiz/:quizId/:questionId", updateQuestions)
export default router;