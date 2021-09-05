import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({postData}) => {

    return (
        <div>
            <h1>Profile</h1>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>

    );
};

export default Profile;
