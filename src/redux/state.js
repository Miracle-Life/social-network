let store = {
    _state: {
        profilePage: {
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
            newPostText: 'Text'

        },
        messagePage: {
            messageData: [
                {
                    id: 1,
                    message: "Hi"
                },
                {
                    id: 2,
                    message: "How is you"
                },
                {
                    id: 3,
                    message: "Yo"
                },
            ],
            dialogsData: [
                {
                    name: "Denys",
                    id: 1
                },
                {
                    name: "Darya",
                    id: 2
                },
                {
                    name: "Alex",
                    id: 3
                },
                {
                    name: "Andrey",
                    id: 4
                },
                {
                    name: "Ihor",
                    id: 5
                },
            ],
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    // addPost() {
    //     const newPost = {
    //         id: 5,
    //         title: this._state.profilePage.newPostText,
    //         likes: 0
    //     }
    //     this._state.profilePage.postData.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state)
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state)
    // },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: 5,
                title: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }

    }


}


export default store
window.store = store
