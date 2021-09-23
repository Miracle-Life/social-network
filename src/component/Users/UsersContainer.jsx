import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {follow, setPage, setUsers, toggleInProgress, toggleIsFetching, unfollow} from "../../redux/users.reducer";
import {usersAPI} from "../../api/api";



class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })

    }

    onPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ?
                    <Preloader/>
                    :
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChange={this.onPageChange}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        users={this.props.users}
                        toggleInProgress={this.props.toggleInProgress}
                        inProgress={this.props.inProgress}
                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        inProgress:state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers, setPage, toggleIsFetching,toggleInProgress
    }
)(UsersContainer);
