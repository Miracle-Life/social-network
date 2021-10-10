import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 1200,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
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
        // case  SET_TOTAL_USERS_COUNT: {
        //     return {...state, totalUsersCount: action.count}
        // }
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


export const acceptFollow = (userId) => ({type: FOLLOW, userId})
export const acceptUnfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
// export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setPage(page))
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(setUsers(data.items))
        dispatch(toggleIsFetching(false))

    }
}

export const followUnfollowFlow = async (dispatch, userId, actionCreator, apiMethod) => {
    dispatch(toggleInProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleInProgress(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(
            dispatch,
            usersAPI.setFollow(usersAPI),
            acceptFollow,
            userId)

    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(
            dispatch,
            usersAPI.setUnfollow(usersAPI),
            acceptUnfollow,
            userId)
    }
}
export default usersReducer;



