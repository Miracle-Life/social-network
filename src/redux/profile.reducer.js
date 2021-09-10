export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let profilePage = {
    postData: [
        {
            id: 1,
            title: "Hi, how are you?",
            likes: 5
        },
        {
            id: 2,
            title: "Its my first post",
            likes: 43
        },
    ],
    newPostText: ''
}


const profileReducer = (state = profilePage, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                title: state.newPostText,
                likes: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export default profileReducer


export const addPostActionCreator = () => ({type: ADD_POST,})
export const addUpdateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
