import React from 'react';
import {addPostActionCreator, addUpdateNewPostActionCreator} from "../../../redux/profile.reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState()
    // debugger
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (text) => {
        let action = addUpdateNewPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            newPostText={state.profile.newPostText}
            postData={state.profile.postData}
            addUpdateNewPost={onPostChange}
            addPost={addPost}/>
    );
};

export default MyPostsContainer;
