import React from 'react';
import ProfileStatus from "./ProfileStatus";
import Contacts from "./Contact";

const ProfileData = ({profile, updateUserStatus, toEditMode, isOwner, status}) => {
    return (
        <div>
            Page info:
            {isOwner ||
            <div>
                <button className="btn btn-warning " onClick={toEditMode}>Edit</button>
            </div>
            }

            <div className="card-text"><b>Full Name:</b> {profile.fullName}</div>

            <div><b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'} </div>
            {profile.lookingForAJob &&
            <div className="card-text"><b>My profession skills:</b>
                <p className="fst-italic">{profile.lookingForAJobDescription}</p>

            </div>
            }

            <div className="card-text">
                <b>About Me:</b>
                <p className="fst-italic">{profile.aboutMe}</p>
            </div>

            <ProfileStatus updateUserStatus={updateUserStatus} status={status}/>

            <div className='justify-content-between'>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key =>
                    <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                )}
            </div>
        </div>
    );
};

export default ProfileData;
