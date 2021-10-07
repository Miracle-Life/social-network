import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true,}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false,}
                    }
                    return user
                })
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
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setPage(page))
        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(toggleIsFetching(false))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleInProgress(true, userId))
        usersAPI.setFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(acceptFollow(userId))
                    dispatch(toggleInProgress(false, userId))
                }
            })
    }
}


export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleInProgress(true, userId))
        usersAPI.setUnfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(acceptUnfollow(userId))
                    dispatch(toggleInProgress(false, userId))
                }
            })

    }
}


export default usersReducer;



