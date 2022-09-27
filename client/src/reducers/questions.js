import { CREATE_QUESTION, GET_ALL_QUESTIONS } from "../static/actionType";

const questionReducer = (questions = [], action) => {
  switch (action.type) {
    case GET_ALL_QUESTIONS:
      localStorage.setItem("quiz", JSON.stringify({ ...action?.payload }));
      return action.payload;
    case CREATE_QUESTION:
      return action.payload;
    default:
      return questions;
  }
};

export default questionReducer;
