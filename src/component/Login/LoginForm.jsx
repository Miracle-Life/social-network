import React from 'react';
import {Field, reduxForm} from 'redux-form'

const LoginForm = props => {
    const {handleSubmit} = props
    return (
        <form className='col-4 m-auto' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <Field
                    placeholder="login"
                    component={'input'}
                    name={'login'}
                    className='form-control form-control-sm'
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div>
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <Field
                    placeholder="password"
                    component={'input'}
                    name={'password'}
                    className='form-control form-control-sm'
                />
            </div>
            <div className="mb-3 form-check">
                <Field
                    component={'input'}
                    name={'rememberMe'}
                    className="form-check-input"
                    type="checkbox"/> remember Me
            </div>
            <div>
                <button className="btn btn-secondary">Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

export default LoginReduxForm;
