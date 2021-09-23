import React, {Component} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth.reducer";


class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(
                        res.data.data.email,
                        res.data.data.id,
                        res.data.data.login)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => ({
    isAuthenticated: state.authUser.isAuthenticated,
    login: state.authUser.login
})

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer);
