import React, {useEffect, useState} from 'react';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    return (
        <>
            {!editMode ?
                <div>
                    <span onDoubleClick={activateEditMode}>Status: {status || '-----'}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </>
    );
};

export default ProfileStatus;
