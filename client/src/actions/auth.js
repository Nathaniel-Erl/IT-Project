import * as api from "../api";
import { AUTH } from "../static/actionType";

export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData)
        dispatch({ type: AUTH, data })
        navigate('/quiz')
    }
    catch (error) {
        console.log(error)
    }
}

export const logIn = (formData, navigate) => async (dispatch) => {
  try {
      const { data } = await api.logIn(formData);
      dispatch({ type: AUTH, data });
      navigate("/quiz");
  } catch (error) {
    console.log(error);
  }
};