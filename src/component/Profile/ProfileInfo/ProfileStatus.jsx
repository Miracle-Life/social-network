import React, {useState} from 'react';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }
    if(props.status===null){
        props.status='Здесь должен быть статус'
    }
    return (
        <>
            {!editMode ?
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
                :
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} value={props.status}/>
                </div>
            }
        </>
    );
};

export default ProfileStatus;
