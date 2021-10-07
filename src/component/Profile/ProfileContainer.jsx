import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile.reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizationUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile
                {...this.props}
                props={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}

//HOC
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let withURLDataContainerComponent = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {getUserProfile})(withURLDataContainerComponent);


let mapStateToProps = state => ({
    profile: state.proFile.profile,
    status: state.proFile.status,
    autorizationUserId: state.authUser.id,
    isAuth: state.authUser.isAuthenticated
})


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    // withAuthRedirect,
    withRouter,
)(ProfileContainer)
