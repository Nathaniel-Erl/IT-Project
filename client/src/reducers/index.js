import { combineReducers } from "redux";
import quizzes from "./quizzes";
import auth from "./auth"
import questions from "./questions";

export default combineReducers({
    quizzes,
    questions,
    auth
})