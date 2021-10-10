import profileReducer, {addPostActionCreator, deletePost} from "./profile.reducer";

let profilePage = {
    postData: [
        {id: 1, title: "Hi, how are you?", likes: 5},
        {id: 2, title: "Its my first post", likes: 43},
    ],
}

test('new post item', () => {
    let action = addPostActionCreator('Hello, world')
    let newState = profileReducer(profilePage, action)
    expect(newState.postData.length).toBe(3)

});

test('title of new post', () => {
    let action = addPostActionCreator('Hello, world')
    let newState = profileReducer(profilePage, action)
    expect(newState.postData[2].title).toBe('Hello, world')
});

test('length title decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(profilePage, action)
    expect(newState.postData.length).toBe(1)
});

test('length title decrement incorect Id', () => {
    let action = deletePost(200)
    let newState = profileReducer(profilePage, action)
    expect(newState.postData.length).toBe(2)
});
