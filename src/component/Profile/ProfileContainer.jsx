import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile.reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        // debugger
        // console.log(this.props)
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 19713
        }
        this.props.getUserProfile(userId)
        // debugger
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


let mapStateToProps = (state) => ({
    profile: state.proFile.profile,
    status: state.proFile.status,
})


export default compose(
    connect(mapStateToProps, {getUserProfile,getUserStatus,updateUserStatus}),
    // withAuthRedirect,
    withRouter,
)(ProfileContainer)
