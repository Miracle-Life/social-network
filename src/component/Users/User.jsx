import React from 'react';
import img from "../../assets/images/img1.jpg";
import {NavLink} from "react-router-dom";

const User = ({user, inProgress, unfollow, follow, ...props}) => {

    return (
        <div className='d-flex p-3 align-items-center'>
            <div className="card border-dark m-3" style={{maxWidth: "560px"}}>
                <div className="row g-4">
                    <div className="col-md-4">
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : img}
                                 className="img-fluid rounded-start" alt="..."/>
                        </NavLink>

                    </div>
                    <div className="col-md-8 mb-2">
                        <div className="card-body ">
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">
                                {user.status}
                            </p>
                            <p className="card-text"><small className="text-muted">
                                Country: {"user.location.country"}
                            </small></p>
                            <p className="card-text"><small className="text-muted">
                                City: {"user.location.city"}
                            </small></p>
                        </div>
                        <div className='card-text'>
                            {user.followed
                                ? <button disabled={inProgress.some(id => id === user.id)}
                                          className='btn btn-secondary'
                                          onClick={() => {
                                              unfollow(user.id)
                                          }}
                                >Unfollow</button>
                                :
                                <button disabled={inProgress.some(id => id === user.id)}
                                        className='btn btn-success'
                                        onClick={() => {
                                            follow(user.id)
                                        }}
                                >Follow</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default User;
