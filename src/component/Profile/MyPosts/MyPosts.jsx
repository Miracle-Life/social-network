import React from 'react';
import Post from "./Post/Post";
import {addPostActionCreator, addUpdateNewPostActionCreator} from "../../../redux/state";

const MyPosts = ({postData, dispatch, newPostText}) => {



    let postElements = postData.map(post => (
        <Post key={post.id} message={post.title} likesCount={post.likes}/>
    ))


    const newPostElements = React.createRef()
    const add = () => {
        dispatch(addPostActionCreator())
    }
    const onPostChange = () => {
        const text = newPostElements.current.value
        // debugger
        // let action = {
        //     type: 'ADD-UPDATE-NEW-POST-TEXT',
        //     newText: text
        // };
        dispatch(addUpdateNewPostActionCreator(text))


    }

    return (
        <div>
            My Posts
            <div>
                <div className="form-floating">
                    <textarea defaultValue={newPostText}
                              // value={newPostText}
                              onChange={onPostChange}
                              ref={newPostElements}
                              // className="form-control"
                              // style={{height: "100px"}}
                    />
                </div>
                <button className="btn btn-success m-2" onClick={add}> Add post
                </button>
                <div className='card-content'>
                    {postElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
