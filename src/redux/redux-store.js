import {combineReducers, createStore} from 'redux'
import profileReducer from "./profile.reducer";
import messageReducer from "./message.reducer";
import sidebarReducer from "./sidebar.reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import usersReducer from "./users.reducer";
import authReducer from "./auth.reducer";

const rootReducer = combineReducers({
    proFile: profileReducer,
    message: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(rootReducer, composeWithDevTools())

// window.store = store

export default store
