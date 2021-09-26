import React from 'react';
import img from "../../assets/images/img1.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {follow, toggleInProgress, unfollow} from "../../redux/users.reducer";
import {usersAPI} from "../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className="container">

            <nav className="d-flex p-3 align-items-center" aria-label="Page navigation">
                <ul className="pagination pagination-sm">
                    {pages.map(page => (
                        <li key={page} className={`page-item ${props.currentPage === page && "active"}`}
                            aria-current="page">
                                <span onClick={() => {
                                    props.onPageChange(page)
                                }}
                                      className="page-link">{page}</span>
                        </li>
                    ))}
                </ul>
            </nav>


            {props.users.map((user) => (
                <div key={user.id} className='d-flex p-3 align-items-center'>
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
                                        ? <button disabled={props.inProgress.some(id => id === user.id)}
                                                  className='btn btn-secondary'
                                                  onClick={() => {
                                                      props.unfollow(user.id)
                                                  }}
                                        >Unfollow</button>
                                        :
                                        <button disabled={props.inProgress.some(id => id === user.id)}
                                                className='btn btn-success'
                                                onClick={() => {
                                                    props.follow(user.id)
                                                }}
                                        >Follow</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;
