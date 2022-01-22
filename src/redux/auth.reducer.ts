import {authAPI, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

export const SET_USER_DATA = 'auth/ADD-SET_USER_DATA';
export const GET_CAPTCHA_URL = 'auth/ADD-GET_CAPTCHA_URL';

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuthenticated: false,
    captchaUrl: null as string | null
}
export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
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

type setAuthUserDataActionPayloadType = {
    email: string | null,
    id: number | null,
    login: string | null,
    isAuthenticated: boolean
}

type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: setAuthUserDataActionPayloadType
}

export const setAuthUserData = (email: string | null, id: number | null, login: string | null, isAuthenticated: boolean): setAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {email, id, login, isAuthenticated}
})

type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL,
    captcha: string
}

export const getCaptcha = (captcha: string): getCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL,
    captcha
})

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(
            response.data.email,
            response.data.id,
            response.data.login,
            true))

    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
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

export const getCaptchaUrl = () => async (dispatch: any) => {
    const res = await securityApi.getCaptchaUrl()
    const captcha = res.url
    dispatch(getCaptcha(captcha))
}


export const logout = () => async (dispatch: any) => {
    let data = await authAPI.logout()
    if (data.data.resultCode === 0) {
        dispatch(setAuthUserData(
            null,
            null,
            null,
            false))
    }

}
