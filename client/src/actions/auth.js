import * as api from '../api'
import { AUTH, ERROR_AUTH } from '../static/actionType'

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData)
    dispatch({ type: AUTH, data })
    navigate('/quiz')
  }
  catch (error) {
    dispatch({ type: ERROR_AUTH, error })
  }
}

export const logIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(formData)
    dispatch({ type: AUTH, data })
    navigate('/quiz')
  }
  catch (error) {
    dispatch({ type: ERROR_AUTH, error });
  }
}


export function authHeader() {
  // return authorization header with basic auth credentials
  let user = JSON.parse(localStorage.getItem('profile'))

  if (user && user.token) {
    return { Authorization: user.token }
  } else {
    return {}
  }
}
