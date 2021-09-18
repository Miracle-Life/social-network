import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile.reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        // debugger
        // console.log(this.props)
        let userId = this.props.match.params.userId
        if(!userId){
            userId=19462
        }
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then(res => {
                    this.props.setUserProfile(res.data)
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

export default connect(mapStateToProps, {setUserProfile})(withURLDataContainerComponent);
