import React from 'react';
import Post from "./Post/Post";

const MyPosts = ({postData}) => {

    let postElements = postData.map(post => (
        <Post key={post.id} message={post.title} likesCount={post.likes}/>
    ))

    return (
        <div>
            My Posts
            <div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                              style={{height: "100px"}}> </textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                    <button className="btn btn-success m-2"> Add post</button>
                </div>
                <div className='card-content'>
                    {postElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
