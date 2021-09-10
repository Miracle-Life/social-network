import React from 'react';
import {addPostActionCreator, addUpdateNewPostActionCreator} from "../../../redux/profile.reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postData: state.profile.postData,
        newPostText: state.profile.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addUpdateNewPost: (text) => {
            dispatch(addUpdateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
