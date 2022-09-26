import * as api from "../api";
import { GET_ALL_QUESTIONS } from "../static/actionType";

export const getQuestions = (quizId) => async (dispatch) => {
  try {
    const { data } = await api.getAllQuestions(quizId);
    dispatch({ type: GET_ALL_QUESTIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
