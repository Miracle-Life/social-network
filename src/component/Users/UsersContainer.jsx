import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    acceptFollow,
    acceptUnfollow,
    getUsers,
    setPage,
    toggleInProgress,
} from "../../redux/users.reducer";
import {usersAPI} from "../../api/api";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
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
                        follow={this.props.acceptFollow}
                        unfollow={this.props.acceptUnfollow}
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
        acceptFollow, acceptUnfollow, setPage, toggleInProgress, getUsers
    }
)(UsersContainer);
