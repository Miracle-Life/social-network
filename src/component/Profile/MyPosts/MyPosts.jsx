import React from 'react';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElements = props.postData.map(post => (
        <Post key={post.id} message={post.title} likesCount={post.likes}/>
    ))
    const newPostElements = React.createRef()
    const addPost = () => {
        props.addPost()
    }
    const onPostChange = () => {
        const text = newPostElements.current.value
        props.addUpdateNewPost(text)
    }
    return (
        <div>
            My Posts
            <div>
                <div className="form-floating">
                    <textarea
                        defaultValue={props.newPostText}
                        onChange={onPostChange}
                        ref={newPostElements}
                        className="form-control"
                        style={{height: "100px"}}
                    />
                </div>
                <button className="btn btn-success m-2" onClick={addPost}> Add post
                </button>
                <div className='card-content'>
                    {postElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
