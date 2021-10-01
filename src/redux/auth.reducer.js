import {authAPI} from "../api/api";

export const SET_USER_DATA = 'ADD-SET_USER_DATA';

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

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(
                data.data.email,
                data.data.id,
                data.data.login,
                true))
        }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(
                null,
                null,
                null,
                false))
        }
    })
}
