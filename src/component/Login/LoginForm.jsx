import React from 'react';
import {reduxForm} from 'redux-form'
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = props => {
    const {handleSubmit} = props

    return (
        <form className='col-4 m-auto' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                {createField('form-control form-control-sm',"email",'email',[required],Input,'text')}

                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div>
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                {createField('form-control form-control-sm',"password",'password',[required],Input,'password')}
                <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>
            </div>
            <div className="mt-3 mb-3 form-check">
                {createField('form-check-input', '', 'rememberMe', '', Input, 'checkbox')}
                remember Me
            </div>
            {props.error &&
            <div className="form-control is-invalid">
                {/*Email our Password is wrong*/}
                {props.error}
            </div>
            }

            <div>
                <button className="btn btn-secondary mt-3">Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

export default LoginReduxForm;
