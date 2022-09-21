import { FETCH_ALL_QUIZZES, CREATE_QUIZ } from "../static/actionType";

export default (quizzes = [], action) => {
    switch (action.type) {
        case FETCH_ALL_QUIZZES:
            return action.payload
        case CREATE_QUIZ:
            return [...quizzes, action.payload]
        default:
            return quizzes;
    }
}