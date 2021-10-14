import React from 'react';
import ProfileStatus from "./ProfileStatus";
import {createField, Input, TextArea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, updateUserStatus, status, handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            Page info:

            <div className="card-text"><b>Full Name:</b>
                {createField('form-control w-75 form-control-sm', 'Full name', 'fullName', [], Input)}
            </div>

            <div><b>Looking for a job:</b>
                {createField('form-check-input', '', 'lookingForAJob', [], Input, 'checkbox')}
            </div>

            <div className="card-text"><b>My profession skills:</b>
                {createField('form-control w-75 mb-3', 'My profession skills:', 'lookingForAJobDescription', [], TextArea)}
            </div>

            <div className="card-text"><b>About Me:</b>
                {createField('form-control w-75 mb-3', 'About Me', 'aboutMe', [], TextArea)}
            </div>

            <ProfileStatus updateUserStatus={updateUserStatus} status={status}/>

            <div className='justify-content-between'>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key =>
                        <div key={key} className='px-4'>
                            <b>{key}</b>
                            {createField('form-control w-75 form-control-sm', `${key}`, `contacts.${key}`, [], Input)}
                        </div>
                    // <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                )}
            </div>
            {error &&
            <div className="form-control mt-3 is-invalid">
                {error}
            </div>
            }

            <div className='mt-3'>
                <button className="btn btn-success">Save</button>
            </div>
        </form>
    );
};

const ProfileDataReduxForm = reduxForm({
    form: 'profileEdit',
})(ProfileDataForm)

export default ProfileDataReduxForm;
