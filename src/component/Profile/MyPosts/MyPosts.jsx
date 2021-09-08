import React from 'react';
import Post from "./Post/Post";

const MyPosts = ({postData, dispatch, newPostText}) => {


    let postElements = postData.map(post => (
        <Post key={post.id} message={post.title} likesCount={post.likes}/>
    ))


    const newPostElements = React.createRef()
    const add = () => {
        dispatch({
            type: 'ADD-POST',
        })
    }
    const onPostChang = () => {
        const text = newPostElements.current.value
        let action = {
            type: 'ADD-UPDATE-NEW-POST-TEXT',
            newText:text
        };
        dispatch(action)


    }

    return (
        <div>
            My Posts
            <div>
                <div className="form-floating">
                    <textarea value={newPostText}
                              onChange={onPostChang}
                              ref={newPostElements}
                              className="form-control"
                              placeholder="Leave a comment here"
                              style={{height: "100px"}}/>
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
