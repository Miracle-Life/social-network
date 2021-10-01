import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = props => {
    const {handleSubmit} = props

    return (
        <form className='col-4 m-auto' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <Field
                    placeholder="login"
                    component={Input}
                    name={'login'}
                    className='form-control form-control-sm'
                    validate={[required]}
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div>
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <Field
                    placeholder="password"
                    component={Input}
                    name={'password'}
                    className='form-control form-control-sm'
                    validate={[required]}
                />
                <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>
            </div>
            <div className="mt-3 mb-3 form-check">
                <Field
                    component={Input}
                    name={'rememberMe'}
                    className="form-check-input"
                    type={"checkbox"}
                /> remember Me
            </div>
            <div>
                <button className="btn btn-secondary ">Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

export default LoginReduxForm;
