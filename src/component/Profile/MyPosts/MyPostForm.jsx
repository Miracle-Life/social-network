import React from 'react';
import {Field, reduxForm} from 'redux-form'

const MePostForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-floating">
                <Field
                    component="textarea"
                    className="form-control mb-3"
                    style={{height: "100px"}}
                    name='myNewPost'
                    placeholder='Enter you message'
                />
            </div>
            <button className="btn btn-success m-2"> Add post
            </button>
        </form>
    );
};
const AddPostForm = reduxForm({
    form: "post"
})(MePostForm)

export default AddPostForm;
