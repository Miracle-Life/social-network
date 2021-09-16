import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import img from "../../../assets/images/img1.jpg";

const ProfileInfo = (props) => {

    return (
        <>
            {!props.profile ?
                <Preloader/>
                :
                <div className="row">
                    <div className="col-5">
                        <div className="card">
                            <img src={props.profile.photos.large !== null ? props.profile.photos.large : img}
                                 className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{props.profile.fullName}</h5>
                                <p className="card-text"> {props.profile.aboutMe}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{props.profile.contacts.facebook}</li>
                                <li className="list-group-item">{props.profile.contacts.website}</li>
                                <li className="list-group-item">{props.profile.contacts.vk}</li>
                                <li className="list-group-item">{props.profile.contacts.twitter}</li>
                                <li className="list-group-item">{props.profile.contacts.instagram}</li>
                                <li className="list-group-item">{props.profile.contacts.youtube}</li>
                                <li className="list-group-item">{props.profile.contacts.github}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-7">
                        Info
                        <p>
                            {props.profile.lookingForAJobDescription}
                        </p>
                    </div>
                </div>
            }
        </>

    );
};

export default ProfileInfo;
