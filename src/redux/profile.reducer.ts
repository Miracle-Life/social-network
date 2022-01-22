import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {photosType, postDataType, profileType} from "../types/types";

export const ADD_POST = 'profile/ADD-POST';
export const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
export const SET_STATUS = 'profile/SET_STATUS'
export const DELETE_POST = 'profile/DELETE_POST'
export const SAVE_PHOTO = 'profile/SAVE_PHOTO'


let profilePage = {
    postData: [
        {id: 1, title: "Hi, how are you?", likes: 5},
        {id: 2, title: "Its my first post", likes: 43},
    ] as Array<postDataType>,
    profile: null as profileType | null,
    status: ""
}
export type initialStateType = typeof profilePage

const profileReducer = (state = profilePage, action: any): initialStateType => {
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
            //временно profileType
            return {...state, profile: {...state.profile, photos: action.photos} as profileType}
        case DELETE_POST:
            return {...state, postData: state.postData.filter(p => p.id !== action.postId)}
        default:
            return state
    }
}
export default profileReducer
type addPostActionCreatorActionType = {
    type: typeof ADD_POST,
    myNewPost: string
}
export const addPostActionCreator = (myNewPost: string): addPostActionCreatorActionType => ({type: ADD_POST, myNewPost})
type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: profileType
}
export const setUserProfile = (profile: profileType): setUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile: profile
})
type setStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}
export const setStatus = (status: string): setStatusActionType => ({type: SET_STATUS, status: status})
type deletePostActionType = {
    type: typeof DELETE_POST,
    postId: number
}
export const deletePost = (postId: number): deletePostActionType => ({type: DELETE_POST, postId})
type savePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO,
    photos: photosType
}
export const savePhotoSuccess = (photos: photosType): savePhotoSuccessActionType => ({type: SAVE_PHOTO, photos})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const res = await profileAPI.getProfileUser(userId)
    dispatch(setUserProfile(res))
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    let res = await profileAPI.getUserStatus(userId)
    dispatch(setStatus(res))
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
    let res = await profileAPI.updateUserStatus(status)
    if (res.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


export const savePhoto = (file: any) => async (dispatch: any) => {
    let res = await profileAPI.savePhoto(file)
    if (res.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.photos))
    }
}
export const saveProfile = (profile: profileType) => async (dispatch: any, getState: any) => {
    const userId = getState().authUser.userId
    const res = await profileAPI.saveProfile(profile)
    if (res.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('profileEdit', {_error: res.messages[0]}))
        return Promise.reject(res.messages[0])
    }
}
