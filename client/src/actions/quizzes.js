import * as api from '../api'
import { FETCH_ALL_QUIZZES, CREATE_QUIZ } from '../static/actionType'

export const getQuizzes = () => async (dispatch) => {
    try {
        const { quizzes } = await api.fetchQuizzes()
        dispatch({ type: FETCH_ALL_QUIZZES, payload: quizzes})     
    }
    catch (error) {
        console.log(error)
    }
}

export const createQuiz = (newQuiz) => async (dispatch) => {
    try {
        const { quiz } = await api.createQuiz(newQuiz)
        dispatch({type : CREATE_QUIZ, payload: quiz})
    }
    catch (error) {
        console.log(error)
    }
}