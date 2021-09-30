import React from 'react';
import DialogItems from "./DialogItems/DialogItems";
import {Message} from "./Message/Message";
import AddMessageForm from "./DialogsForm";

const Dialogs = (props) => {

    let state = props.message

    const addNewMessage = (value) => {
        props.sendMessageCreator(value.newMessageText)
    }

    let dialogsElements = state.dialogsData.map(user => (
        <DialogItems key={user.id} name={user.name} id={user.id}/>
    ))
    let messageElements = state.messageData.map(mes => (
        <Message key={mes.id} message={mes.message} id={mes.id}/>
    ))


    return (
        <div>
            <h1>Dialogs</h1>
            <div className="row">
                <div className="col-2">
                    {dialogsElements}
                </div>

                <div className="col-10">
                    <div>{messageElements}</div>
                    <AddMessageForm
                        onSubmit={addNewMessage}
                    />

                </div>
            </div>
        </div>
    );
};

export default Dialogs;
