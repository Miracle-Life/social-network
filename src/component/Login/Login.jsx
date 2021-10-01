import React from 'react';
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth.reducer";
import {Redirect} from "react-router-dom";

const LoginPage = (props) => {
    const submit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuthenticated) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login Page</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    );
};
const mapStateToProps = (state)=>({
    isAuthenticated: state.authUser.isAuthenticated
})
export default connect(mapStateToProps, {login, logout})(LoginPage)
