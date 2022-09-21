import * as api from '../api'
import { FETCH_ALL_QUIZZES, CREATE_QUIZ, DELETE_QUIZ } from '../static/actionType'

export const getQuizzes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchQuizzes()
        console.log(data)
        dispatch({ type: FETCH_ALL_QUIZZES, payload: data })     
    }
    catch (error) {
        console.log(error)
    }
}

export const createQuiz = (newQuiz) => async (dispatch) => {
    try {
        const { data } = await api.createQuiz(newQuiz)
        dispatch({ type : CREATE_QUIZ, payload: data })
    }
    catch (error) {
        console.log(error)
    }
}

export const deleteQuiz = (id) => async (dispatch) => {
    try {
        await api.deleteQuiz(id)
        dispatch({ type: DELETE_QUIZ, payload: id })
    } catch (error) {
        console.log(error);
    }
}