import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {userType} from "../types/types";
import {type} from "os";


const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [] as Array<userType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,  // Array of users id
};

type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): initialStateType => {
// debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                // users: state.users.map((user) => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: true,}
                //     }
                //     return user
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
                // users: state.users.map((user) => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: false,}
                //     }
                //     return user
                // })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}
        }
        case  SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)

            }
        }

        default:
            return state
    }
}

type acceptFollowActionType = {
    type: typeof FOLLOW,
    userId: number
}
export const acceptFollow = (userId: number): acceptFollowActionType => ({type: FOLLOW, userId})
type acceptUnfollowActionType = {
    type: typeof UNFOLLOW,
    userId: number
}
export const acceptUnfollow = (userId: number): acceptUnfollowActionType => ({type: UNFOLLOW, userId})
type setUsersActionType = {
    type: typeof SET_USERS,
    users: Array<userType>
}
export const setUsers = (users: Array<userType>): setUsersActionType => ({type: SET_USERS, users})
type setPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    pageNumber: number
}
export const setPage = (pageNumber: number): setPageActionType => ({type: SET_CURRENT_PAGE, pageNumber})
type setUsersTotalCountACActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}
export const setUsersTotalCountAC = (totalUsersCount: number):setUsersTotalCountACActionType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})
type toggleInProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}
export const toggleInProgress = (isFetching: boolean, userId: number):toggleInProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setPage(page))
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(setUsers(data.items))
        dispatch(toggleIsFetching(false))
        dispatch(setUsersTotalCountAC(data.totalCount))

    }
}

export const followUnfollowFlow = async (dispatch: any, userId: number, actionCreator: any, apiMethod: any) => {
    dispatch(toggleInProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleInProgress(false, userId))
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        await followUnfollowFlow(
            dispatch,
            usersAPI.setFollow(usersAPI), //error
            acceptFollow,
            userId)

    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        await followUnfollowFlow(
            dispatch,
            usersAPI.setUnfollow(usersAPI), //error
            acceptUnfollow,
            userId)
    }
}
export default usersReducer;



