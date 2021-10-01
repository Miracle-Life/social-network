import React, { useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth.reducer";


const HeaderContainer = (props) => {

    useEffect(() => {
        props.getAuthUserData()
    }, [props]);

    return (
        <Header {...props}/>
    );

}

let mapStateToProps = (state) => ({
    isAuthenticated: state.authUser.isAuthenticated,
    login: state.authUser.login
})

export default connect(mapStateToProps, {
    getAuthUserData,logout
})(HeaderContainer);
