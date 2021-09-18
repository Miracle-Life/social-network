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
                                <h5 className="card-title"><h3> {props.profile.fullName}</h3></h5>
                            </div>

                        </div>
                    </div>
                    <div className="col-7">

                        <h4>Info</h4>
                        <p className="card-text"> <h5>About Me:</h5> {props.profile.aboutMe}</p>
                        <p>
                            {props.profile.lookingForAJobDescription}
                        </p>
                        <p className="card-text"> <h5>About Me:</h5> {props.profile.status}</p>
                        <div className='justify-content-between'>
                            <h4>
                                Contacts
                            </h4>

                            <Link to={{pathname: `https://${props.profile.contacts.facebook}`}} target="_blank">
                                <img src={fb} style={{width: '40px', height: '40px'}} alt=""/>
                            </Link>
                            <Link to={{pathname: `https://${props.profile.contacts.website}`}} target="_blank">
                                <img src={website} style={{width: '40px', height: '40px'}} alt=""/>
                            </Link>
                            <Link to={{pathname: `https://${props.profile.contacts.vk}`}} target="_blank">
                                <img src={vk} style={{width: '40px', height: '40px'}} alt=""/>
                            </Link>
                            <Link to={{pathname: `https://${props.profile.contacts.twitter}`}} target="_blank">
                                <img src={twitter} style={{width: '40px', height: '40px'}} alt=""/>
                            </Link>
                            <Link to={{pathname: `https://${props.profile.contacts.instagram}`}} target="_blank">
                                <img src={instagram} style={{width: '40px', height: '40px'}} alt=""/>
                            </Link>
                            <Link to={{pathname: `https://${props.profile.contacts.youtube}`}} target="_blank">
                                <img src={youtube} style={{width: '40px', height: '40px'}} alt=""/>
                            </Link>
                            <Link to={{pathname: `https://${props.profile.contacts.github}`}} target="_blank">
                                <img src={github} style={{width: '40px', height: '40px'}} alt=""/>
                            </Link>
                        </div>


                    </div>
                </div>
            }
        </>

    );
};

export default ProfileInfo;
