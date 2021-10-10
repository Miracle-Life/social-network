import React from 'react';
import Paginator from "../common/Pagenator/Paginator";
import User from "./User";


const Users = ({currentPage, totalUsersCount, onPageChange, pageSize, users, ...props}) => {

    return (
        <div className="container">

            <Paginator
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                onPageChange={onPageChange}
                currentPage={currentPage}/>

            {users.map((user) => (
                <User
                    user={user}
                    inProgress={props.inProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                    key={user.id}
                />
            ))}
        </div>
    );
};

export default Users;
