import React, { useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import { logout} from "../../redux/auth.reducer";


const HeaderContainer = (props) => {

    return (
        <Header {...props}/>
    );

}

let mapStateToProps = (state) => ({
    isAuthenticated: state.authUser.isAuthenticated,
    login: state.authUser.login
})

export default connect(mapStateToProps, {
    logout
})(HeaderContainer);
