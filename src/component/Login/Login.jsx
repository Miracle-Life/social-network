import React from 'react';
import LoginReduxForm from "./LoginForm";

const LoginPage = (props) => {
    const submit = values => {

        console.log(values)
    }
    return (
        <div>
            <h1> Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    );
};

export default LoginPage;
