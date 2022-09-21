import { FETCH_ALL_QUIZZES, CREATE_QUIZ, DELETE_QUIZ } from "../static/actionType";

export default (quizzes = [], action) => {
    switch (action.type) {
        case FETCH_ALL_QUIZZES:
            return action.payload
        case CREATE_QUIZ:
            return [...quizzes, action.payload]
        case DELETE_QUIZ:
            return quizzes.filter(quiz => quiz._id !== action.payload)
        default:
            return quizzes;
    }
}