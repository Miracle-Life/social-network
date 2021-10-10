import React from 'react';
import Post from "./Post/Post";
import AddPostForm from "./MyPostForm";


const MyPosts = (props) => {

    let postElements = props.postData.map(post => (
        <Post key={post.id} message={post.title} likesCount={post.likes}/>
    ))

    const addNewPost = (value) => {
        props.addPost(value.myNewPost)
    }
    console.log('render')
    return (
        <div>
            My Posts
            <div>
                <AddPostForm onSubmit={addNewPost}/>
                <div className='card-content'>
                    {postElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
