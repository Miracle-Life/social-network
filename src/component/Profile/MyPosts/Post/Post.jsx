import React from 'react';
import s from './Post.module.css';

const Post = ({message, likesCount}) => {
    return (
        <div className={`container ${s.item}`}>
            <img src='https://klike.net/uploads/posts/2019-03/1551511825_37.jpg' alt=''/>
            {message}
            <div>
                <span>like</span> {likesCount}
            </div>
        </div>
    );
};

export default Post;
