import { CREATE_QUESTION, DELETE_QUESTION, GET_ALL_QUESTIONS, RESET_QUESTIONS, UPDATE_QUESTIONS } from "../static/actionType";

const questionReducer = (questions = [], action) => {
  switch (action.type) {
    case RESET_QUESTIONS:
      return []
    case GET_ALL_QUESTIONS:
      localStorage.setItem("quiz", JSON.stringify({ ...action?.payload }));
      return action.payload;
    case CREATE_QUESTION:
      localStorage.setItem("quiz", JSON.stringify({ ...action?.payload }));
      return action.payload;
    case DELETE_QUESTION:
      return { ...questions, questions: questions.questions.filter(q => q._id !== action.payload) }
    case UPDATE_QUESTIONS:
      localStorage.setItem("quiz", JSON.stringify({ ...action?.payload }));
      return action.payload;
    default:
      return questions;
  }
};

export default questionReducer;
