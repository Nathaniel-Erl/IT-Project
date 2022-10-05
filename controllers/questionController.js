import Quiz from "../models/quizSchema.js";
import Question from "../models/questionSchema.js";
import mongoose from "mongoose";

export const getAllQuestions = async (req, res) => {
  const { quizId } = req.params;
  try {
    const quizzes = await Quiz.findById(quizId);
    res.json(quizzes);
  }
  catch (error) {
    console.log(error);
    res.status(400);
    return;
  }
};

export const accessCreateQuestion = (req, res) => {
  res.json({ message: "Successfully access to create question page" });
};

export const createQuestion = async (req, res) => {
  const { quizId, question, type, correctAnswer, incorrectAnswer } = req.body  
  try {
    const quiz = await Quiz.findById(quizId)
    const newQuestion = await Question.create({
      question,
      type,
      correctAnswer,
      incorrectAnswer
    });

    // save updated record of quiz
    await quiz.questions.push(newQuestion)
    await quiz.save()

    // show new quiz record
    const result = await Quiz.findById(quizId);
    res.status(201).json(result);
    
  } catch (error) {
    console.log(error)
    res.json({ message: error.message });
  } 
}

export const deleteQuestion = async (req, res) => {
  const { quizId, questionId } = req.params

  if (!mongoose.Types.ObjectId.isValid(quizId)) {
    return res.status(404).send("No quiz with that id");
  }

   if (!mongoose.Types.ObjectId.isValid(questionId)) {
    return res.status(404).send("No question with that id");
  }

  await Quiz.updateOne( 
  { '_id': quizId  }, 
  { $pull: { questions: { _id: questionId } } });

  await Question.findByIdAndRemove(questionId);
  
  return res.json({ message: "Question deleted successfully" })
}