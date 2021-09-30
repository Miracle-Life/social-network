// import React from 'react';
import {addPostActionCreator,} from "../../../redux/profile.reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postData: state.proFile.postData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (myNewPost) => {
            dispatch(addPostActionCreator(myNewPost))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
