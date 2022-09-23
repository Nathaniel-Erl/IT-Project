import { AUTH, ERROR_AUTH, LOGOUT } from "../static/actionType";

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
            return { ...state, authData: action.data }
        case ERROR_AUTH:
            return {...state, authData: action.error.response.data}
        case LOGOUT:
            localStorage.clear()
            return { ...state, authData: null };
        default:
            return state;
    }
}

export default authReducer;