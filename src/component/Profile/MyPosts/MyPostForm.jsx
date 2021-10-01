import React, {useMemo} from 'react';
import {Field, reduxForm} from 'redux-form'
import {MaxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";


const MePostForm = (props) => {
    const {handleSubmit} = props
    const maxLength10 = useMemo(() =>
            MaxLengthCreator(10)
        , [])
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-floating">
                <Field
                    component={TextArea}
                    className="form-control mb-3"
                    style={{height: "100px", width:"400px"}}
                    name='myNewPost'
                    placeholder='Enter you message'
                    validate={[required, maxLength10]}
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
