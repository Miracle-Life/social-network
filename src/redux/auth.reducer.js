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
                ...action.data,
                isAuthenticated: true
            }
        default:
            return state
    }
}
export default authReducer

export const setAuthUserData = (email, id, login) => ({type: SET_USER_DATA, data: {email, id, login}})