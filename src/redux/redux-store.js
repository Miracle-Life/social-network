import {applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from "./profile.reducer";
import messageReducer from "./message.reducer";
import sidebarReducer from "./sidebar.reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import usersReducer from "./users.reducer";
import authReducer from "./auth.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    proFile: profileReducer,
    message: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    authUser: authReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// window.store = store

export default store
