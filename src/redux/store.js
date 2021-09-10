// import sidebarReducer from "./sidebar.reducer";
// import profileReducer from "./profile.reducer";
// import messageReducer from "./message.reducer";
//
//
// let store = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {
//                     id: 1,
//                     title: "Hi, how are you?",
//                     likes: 5
//                 },
//                 {
//                     id: 2,
//                     title: "Its my first post",
//                     likes: 43
//                 },
//             ],
//             newPostText: ''
//
//         },
//         messagePage: {
//             messageData: [
//                 {
//                     id: 1,
//                     message: "Hi"
//                 },
//                 {
//                     id: 2,
//                     message: "How is you"
//                 },
//                 {
//                     id: 3,
//                     message: "Yo"
//                 },
//             ],
//             dialogsData: [
//                 {
//                     name: "Denys",
//                     id: 1
//                 },
//                 {
//                     name: "Darya",
//                     id: 2
//                 },
//                 {
//                     name: "Alex",
//                     id: 3
//                 },
//                 {
//                     name: "Andrey",
//                     id: 4
//                 },
//                 {
//                     name: "Ihor",
//                     id: 5
//                 },
//             ],
//             newMessageTest: ""
//         },
//         sidebar: {}
//     },
//     _callSubscriber(state) {
//         console.log(state)
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action) {
//         profileReducer(this._state.profilePage, action)
//         messageReducer(this._state.messagePage, action)
//         sidebarReducer(this._state.sidebar, action)
//         this._callSubscriber(this._state)
//     }
//
//
// }
//
//
// export default store
// window.store = store
