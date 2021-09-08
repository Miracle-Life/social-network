import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({postData, dispatch, newPostText}) => {

    return (
        <div>
            <h1>Profile</h1>
            <ProfileInfo/>
            <MyPosts
                postData={postData}
                newPostText={newPostText}

                dispatch={dispatch}/>
        </div>

    );
};

export default Profile;
