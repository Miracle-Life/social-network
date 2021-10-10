import {getAuthUserData} from "./auth.reducer";

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialize: false,
}

const appReducer = (state = initialState, action) => {
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

export const setInitializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
})

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    // debugger
    promise.then(()=>{
        dispatch(setInitializedSuccess())
    })


}
