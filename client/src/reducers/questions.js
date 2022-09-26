import { GET_ALL_QUESTIONS } from "../static/actionType";

const questionReducer = (questions = [], action) => {
  switch (action.type) {
    case GET_ALL_QUESTIONS:
      return action.payload;
    default:
      return questions;
  }
};

export default questionReducer;
