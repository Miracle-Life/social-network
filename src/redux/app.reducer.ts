import {getAuthUserData} from "./auth.reducer";

export const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

export type initialStateType = {
    initialize: boolean,
}
let initialState: initialStateType = {
    initialize: false,
}

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialize: true,
            }
        default:
            return state
    }
}
export default appReducer

export type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const setInitializedSuccess = (): initializedSuccessActionType => ({
    type: INITIALIZED_SUCCESS,
})

export const initializedApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    // debugger
    promise.then(() => {
        dispatch(setInitializedSuccess())
    })


}
