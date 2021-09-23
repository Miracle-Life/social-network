import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile.reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        // debugger
        // console.log(this.props)
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 19713
        }
        usersAPI.getProfileUser(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })

    }

    render() {
        return (
            <Profile {...this.props} props={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.proFile.profile,
})
let withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {setUserProfile})(withURLDataContainerComponent);
