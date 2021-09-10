import {combineReducers, createStore} from 'redux'
import profileReducer from "./profile.reducer";
import messageReducer from "./message.reducer";
import sidebarReducer from "./sidebar.reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    profile: profileReducer,
    message: messageReducer,
    sidebar: sidebarReducer,
})

const store = createStore(rootReducer,composeWithDevTools())


export default store
