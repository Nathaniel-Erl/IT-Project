import express from "express";
import passport from "passport";

import {
  createQuiz,
  markQuiz,
  getAllQuizzes,
  deleteQuiz,
  updateQuiz,
} from "../controllers/quizController.js";

const router = express.Router();

// fetch all quizzes
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getAllQuizzes
);

//router.post('/quiz/:id/attempt', markQuiz)

// create quiz
router.post("/", passport.authenticate("jwt", { session: false }), createQuiz);

// delete quiz
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteQuiz
);

// update quiz
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateQuiz
);

export default router;
