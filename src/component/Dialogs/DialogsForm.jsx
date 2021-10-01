import React, {useMemo} from 'react';
import {Field, reduxForm} from 'redux-form'
import {TextArea} from "../common/FormsControls/FormsControls";
import {MaxLengthCreator, required} from "../../utils/validators/validators";

const DialogsForm = (props) => {
    const {handleSubmit} = props
    const maxLength = useMemo(() =>
            MaxLengthCreator(100)
        , [])
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder='Enter you message'
                    name="newMessageText"
                    component={TextArea}
                    className="form-control mb-3"
                    validate={[required, maxLength]}
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
