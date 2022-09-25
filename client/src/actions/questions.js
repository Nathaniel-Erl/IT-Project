import * as api from "../api";
import { DELETE_QUESTION, UPDATE_QUESTION } from "../static/actionType";

export const getAllQuestion = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllQuestion();
    dispatch({ type: FETCH_ALL_QUESTIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createQuestion = (newQuiz) => async (dispatch) => {
  try {
    const { data } = await api.createQuestion(newQuiz);
    dispatch({ type: CREATE_QUESTION, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getQuestion = () => async (dispatch) => {
  try {
    const { data } = await api.fetchQuestion();
    dispatch({ type: FETCH_QUESTION, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateQuestion = (id) => async (dispatch) => {
  try {
    await api.updateQuestion(id);
    dispatch({ type: UPDATE_QUESTION, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuestion = (id) => async (dispatch) => {
  try {
    await api.deleteQuestion(id);
    dispatch({ type: DELETE_QUESTION, payload: id });
  } catch (error) {
    console.log(error);
  }
};
