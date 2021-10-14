import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <h1>Profile</h1>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer/>
        </div>

    );
};

export default Profile;
