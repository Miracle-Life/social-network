import {applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from "./profile.reducer";
import messageReducer from "./message.reducer";
import sidebarReducer from "./sidebar.reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import usersReducer from "./users.reducer";
import authReducer from "./auth.reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "./app.reducer";

const rootReducer = combineReducers({
    proFile: profileReducer,
    message: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    authUser: authReducer,
    app: appReducer,
    form: formReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// window.store = store

export default store
