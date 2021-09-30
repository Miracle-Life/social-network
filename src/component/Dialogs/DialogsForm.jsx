import React from 'react';
import {Field, reduxForm} from 'redux-form'

const DialogsForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder='Enter you message'
                    name="newMessageText"
                    component="textarea"
                    className="form-control mb-3"
                />
            </div>
            <div>
                <button
                    className="btn btn-secondary"
                >Send
                </button>
            </div>
        </form>
    );
};

const AddMessageForm = reduxForm({
    form: 'message',
})(DialogsForm)

export default AddMessageForm;
