import React, {useEffect, useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import img from "../../../assets/images/img1.jpg";
import ProfileData from "../ProfileData/ProfileData";
import ProfileDataForm from "../ProfileData/ProfileDataForm";

const ProfileInfo = ({profile, updateUserStatus, savePhoto, isOwner, status, saveProfile, ...props}) => {
    const [editMode, setEditMode] = useState(false)

    const onSubmit = async (formData) => {
        await saveProfile(formData).then(() => {
            setEditMode(false)
        })

    }

    useEffect(() => {

    }, [props.profile])

    const onMainNewPhoto = (e) => {
        console.log(e.target.files[0])
        savePhoto(e.target.files[0])
    }
    return (
        <>
            {!profile ?
                <Preloader/>
                :
                <div className="row">
                    <div className="col-5">
                        <div className="card w-75">
                            <img src={profile.photos.large || img}
                                 className="card-img-top" alt="..."/>
                            {isOwner ||
                            <div className="mb-3 mt-3">
                                <input className="form-control btn-success" onChange={onMainNewPhoto} type="file"/>
                            </div>
                            }
                            <div className="card-body">
                                <h5 className="card-title"> {profile.fullName}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-7">
                        {editMode
                            ? <ProfileDataForm
                                initialValues={profile}
                                profile={profile}
                                updateUserStatus={updateUserStatus}
                                status={status}
                                onSubmit={onSubmit}
                            />
                            : <ProfileData
                                toEditMode={() => {
                                    setEditMode(true)
                                }}
                                isOwner={isOwner}
                                profile={profile}
                                updateUserStatus={updateUserStatus}
                                status={status}/>
                        }

                    </div>
                </div>
            }
        </>
    );
};

export default ProfileInfo;
