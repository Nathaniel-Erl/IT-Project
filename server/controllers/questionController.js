import Quiz from "../models/quizSchema.js";
import Question from "../models/questionSchema.js";

export const getAllQuestions = async (req, res) => {
  const { quizId } = req.params;
  try {
    const quizzes = await Quiz.findById(quizId);
    res.json({ quizId: quizId, questions: quizzes.questions });
  } catch (error) {
    console.log(error);
    res.status(400);
    return;
  }
};
