import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import img from "../../../assets/images/img1.jpg";
import {Link} from "react-router-dom";
import fb from '../../../assets/icon-social/fb.png'
import website from "../../../assets/icon-social/website.png"
import vk from "../../../assets/icon-social/vk.png"
import twitter from "../../../assets/icon-social/twitter.png"
import instagram from "../../../assets/icon-social/instagram.png"
import youtube from "../../../assets/icon-social/youtube.png"
import github from "../../../assets/icon-social/github.png"
import ProfileStatus from './ProfileStatus'

const ProfileInfo = ({profile, updateUserStatus,savePhoto, isOwner, status,...props}) => {


    const onMainNewPhoto=(e)=>{
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
                        Info
                        <div className="card-text"> About Me: {profile.aboutMe}</div>
                        <div>
                            {profile.lookingForAJobDescription}
                        </div>
                        {/*<p className="card-text"> Me Status:{.profile.status}</p>*/}
                        <ProfileStatus updateUserStatus={updateUserStatus} status={status}/>
                        <div className='justify-content-between'>
                            Contacts
                            <div>
                                <Link to={{pathname: `https://${profile.contacts.facebook}`}} target="_blank">
                                    <img src={fb} style={{width: '40px', height: '40px'}} alt=""/>
                                </Link>
                                <Link to={{pathname: `https://${profile.contacts.website}`}} target="_blank">
                                    <img src={website} style={{width: '40px', height: '40px'}} alt=""/>
                                </Link>
                                <Link to={{pathname: `https://${profile.contacts.vk}`}} target="_blank">
                                    <img src={vk} style={{width: '40px', height: '40px'}} alt=""/>
                                </Link>
                                <Link to={{pathname: `https://${profile.contacts.twitter}`}} target="_blank">
                                    <img src={twitter} style={{width: '40px', height: '40px'}} alt=""/>
                                </Link>
                                <Link to={{pathname: `https://${profile.contacts.instagram}`}} target="_blank">
                                    <img src={instagram} style={{width: '40px', height: '40px'}} alt=""/>
                                </Link>
                                <Link
                                    to={{pathname: `https://${profile.contacts.youtube}`}}
                                    target="_blank">
                                    <img src={youtube} style={{width: '40px', height: '40px'}} alt=""/>
                                </Link>
                                <Link to={{pathname: `https://${profile.contacts.github}`}} target="_blank">
                                    <img src={github} style={{width: '40px', height: '40px'}} alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    );
};

export default ProfileInfo;
