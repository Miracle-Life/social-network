import {profileAPI} from "../api/api";

export const ADD_POST = 'ADD-POST';
export const SET_USER_PROFILE = 'SET-USER-PROFILE'
export const SET_STATUS = 'SET_STATUS'

let profilePage = {
    postData: [
        {id: 1, title: "Hi, how are you?", likes: 5},
        {id: 2, title: "Its my first post", likes: 43},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = profilePage, action) => {
    switch (action.type) {
        case ADD_POST:
            debugger
            let newPost = {
                id: 5,
                title: action.myNewPost,
                likes: 66
            };
            return {
                ...state,
                postData: [...state.postData, newPost]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            // debugger
            return {...state, status: action.status}
        default:
            return state
    }
}
export default profileReducer

export const addPostActionCreator = (myNewPost) => ({type: ADD_POST,myNewPost})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setStatus = (status) => ({type: SET_STATUS, status: status})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfileUser(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })

}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(data => {
            // debugger
            dispatch(setStatus(data))
        })

}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })

}
