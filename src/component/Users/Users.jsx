import React from 'react';
import styles from './users.module.css';
import axios from "axios";
import img from '../../assets/images/img1.jpg'

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0//users')
            .then(res => {
                props.setUsers(
                    res.data.items
                )
            })


    }


    return (
        <div>
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
    )
}

export default Users;
