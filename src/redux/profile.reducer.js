import {profileAPI} from "../api/api";

export const ADD_POST = 'profile/ADD-POST';
export const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
export const SET_STATUS = 'profile/SET_STATUS'
export const DELETE_POST = 'profile/DELETE_POST'

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
            // debugger
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
        case DELETE_POST:
            return {...state, postData: state.postData.filter(p => p.id !== action.postId)}
        default:
            return state
    }
}
export default profileReducer

export const addPostActionCreator = (myNewPost) => ({type: ADD_POST, myNewPost})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setStatus = (status) => ({type: SET_STATUS, status: status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getUserProfile = (userId) => async (dispatch) => {
    const res = await profileAPI.getProfileUser(userId)
    dispatch(setUserProfile(res))
}

export const getUserStatus = (userId) => async (dispatch) => {
    let res = await profileAPI.getUserStatus(userId)
    dispatch(setStatus(res))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let res = await profileAPI.updateUserStatus(status)
    if (res.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
