import React from 'react';
import {addPostActionCreator, addUpdateNewPostActionCreator} from "../../../redux/profile.reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {

    // let state = props.store.getState()
    // debugger
    // const addPost = () => {
    //     props.store.dispatch(addPostActionCreator())
    // }
    // const onPostChange = (text) => {
    //     let action = addUpdateNewPostActionCreator(text)
    //     props.store.dispatch(action)
    // }

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                const onPostChange = (text) => {
                    let action = addUpdateNewPostActionCreator(text)
                    store.dispatch(action)
                }
                return (
                    <MyPosts
                        newPostText={state.profile.newPostText}
                        postData={state.profile.postData}
                        addUpdateNewPost={onPostChange}
                        addPost={addPost}/>)

            }}
        </StoreContext.Consumer>

    );
};

export default MyPostsContainer;
