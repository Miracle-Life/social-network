import React from 'react';
import style from "./users.module.css";
import img from "../../assets/images/img1.jpg";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>

            <div>
                {pages.map(page => (
                    <span key={page}
                          onClick={() => {
                              props.onPageChange(page)
                          }}
                          className={props.currentPage === page && style.selectedPage}>{page}</span>
                ))}
            </div>

            {props.users.map((user) => (
                <div key={user.id} className='container'>
                    <div className="card border-dark m-3" style={{maxWidth: "560px"}}>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <img src={user.photos.small !== null ? user.photos.small : img}
                                     className="img-fluid rounded-start" alt="..."/>
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
                                        ? <button className='btn btn-secondary' onClick={() => {
                                            props.unfollow(user.id)
                                        }}>Unfollow</button>
                                        : <button className='btn btn-success' onClick={() => {
                                            props.follow(user.id)
                                        }}>Follow</button>}
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
