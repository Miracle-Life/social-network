import React from 'react';
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth.reducer";
import {Redirect} from "react-router-dom";

const LoginPage = ({login, captchaUrl, isAuthenticated}) => {

    const submit = formData => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (isAuthenticated) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login Page</h1>
            <LoginReduxForm captcha={captchaUrl} onSubmit={submit}/>
        </div>
    );
};
const mapStateToProps = (state) => ({
    captchaUrl: state.authUser.captchaUrl,
    isAuthenticated: state.authUser.isAuthenticated
})
export default connect(mapStateToProps, {login})(LoginPage)
