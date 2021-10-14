import {authAPI, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

export const SET_USER_DATA = 'auth/ADD-SET_USER_DATA';
export const GET_CAPTCHA_URL = 'auth/ADD-GET_CAPTCHA_URL';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthenticated: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA_URL:
            return {...state, captchaUrl: action.captcha}
        default:
            return state
    }
}
export default authReducer

export const setAuthUserData = (email, id, login, isAuthenticated) => ({
    type: SET_USER_DATA,
    payload: {email, id, login, isAuthenticated}
})

export const getCaptcha = (captcha) => ({
    type: GET_CAPTCHA_URL,
    captcha
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

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let messages = response.messages.length > 0 ? response.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: messages}))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const res = await securityApi.getCaptchaUrl()
    const captcha = res.url
    dispatch(getCaptcha(captcha))
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
