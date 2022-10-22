import mongoose from "mongoose";
import Quiz from '../models/quizSchema.js'

export const createQuiz = async (req, res) => {
  const { subject, description, image, createdBy } = req.body
  const questions = []

  try {
    const newQuiz = await Quiz.create({
      subject,
      description,
      createdBy: createdBy,
      image,
      questions,
    })
    res.send(newQuiz)
  } catch (error) {
    console.log(error)
    res.send(400)
  }
}

export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find()

    res.json(quizzes)
  } catch (error) {
    console.log(error)
    res.status(400)
    return
  }
}

export const deleteQuiz = async (req, res) => {
  const { id: _id } = req.params

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No quiz with that id");
  }

  await Quiz.findByIdAndRemove(_id);

  res.json({ message: "Post deleted successfully" });
}

export const updateQuiz = async (req, res) => {
  const { id: _id } = req.params
  const quiz = req.body

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No quiz with that id");
  }

  const updated = await Quiz.findByIdAndUpdate(_id, { ...quiz, _id },  { new: true })
  res.json(updated)
}



