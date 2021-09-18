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
                    let {id, email, login} = res.data.data
                    setAuthUserData(id, email, login)
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
    isAuthenticated: state.auth.isAuthenticated,
    login: state.auth.login
})

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer);
