import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export const ADD_POST = 'profile/ADD-POST';
export const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
export const SET_STATUS = 'profile/SET_STATUS'
export const DELETE_POST = 'profile/DELETE_POST'
export const SAVE_PHOTO = 'profile/SAVE_PHOTO'


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
        case SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}}
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
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos})

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


export const savePhoto = (file) => async (dispatch) => {
    let res = await profileAPI.savePhoto(file)
    if (res.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().authUser.userId
    const res = await profileAPI.saveProfile(profile)
    if (res.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('profileEdit', {_error: res.messages[0]}))
        return Promise.reject(res.messages[0])
    }
}
