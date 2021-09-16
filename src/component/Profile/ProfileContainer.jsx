import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile.reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            // this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
                .then(res => {
                    this.props.setUserProfile(res.data)
                    // this.props.toggleIsFetching(false)
                })
        }, 1000)
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


export default connect(mapStateToProps,
    {
        setUserProfile
    }
)(ProfileContainer);
