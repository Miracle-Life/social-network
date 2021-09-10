import React from 'react';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <h1>Profile</h1>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>

    );
};

export default Profile;
