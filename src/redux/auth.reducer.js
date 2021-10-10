import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export const SET_USER_DATA = 'auth/ADD-SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthenticated: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
export default authReducer

export const setAuthUserData = (email, id, login, isAuthenticated) => ({
    type: SET_USER_DATA,
    payload: {email, id, login, isAuthenticated}
})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(
            response.data.email,
            response.data.id,
            response.data.login,
            true))

    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: messages}))
    }
}


export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(
            null,
            null,
            null,
            false))
    }

}
