import { FETCH_ALL_QUIZZES, CREATE_QUIZ, DELETE_QUIZ, FILTER_QUIZZES } from "../static/actionType";

const quizReducer = (quizzes = [], action) => {
    switch (action.type) {
        case FETCH_ALL_QUIZZES:
            return action.payload
        case CREATE_QUIZ:
            return [...quizzes, action.payload]
        case DELETE_QUIZ:
            return quizzes.filter(quiz => quiz._id !== action.payload)
        case FILTER_QUIZZES:
            const searchValue = action.payload.toLowerCase()
            return quizzes.filter(quiz =>
                        quiz.subject.toLowerCase().match(searchValue) ||
                        quiz.description.toLowerCase().match(searchValue))
        default:
            return quizzes;
    }
}

export default quizReducer