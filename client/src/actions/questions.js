import * as api from "../api";
import { CREATE_QUESTION, GET_ALL_QUESTIONS } from "../static/actionType";

export const getQuestions = (quizId) => async (dispatch) => {
  try {
    const { data } = await api.getAllQuestions(quizId);
    dispatch({ type: GET_ALL_QUESTIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createQuestion = (newQuestion, navigate, quizId) => async (dispatch) => {
  try {
    const { data } = await api.createQuestion(newQuestion);
    dispatch({ type: CREATE_QUESTION, payload: data });
    navigate(`/quiz/${quizId}`)
  }
  catch (error) {
    console.log(error);
  }
};


