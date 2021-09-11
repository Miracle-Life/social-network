import React from 'react';
import DialogItems from "./DialogItems/DialogItems";
import {Message} from "./Message/Message";

const Dialogs = (props) => {

    let state = props.message

    const onSendMessage = () => {
        props.sendMessageCreator()
    }
    const onNewMessageText = (event) => {
        let body = event.target.value
        props.updateMessageBodyCreator(body)
    }

    let dialogsElements = state.dialogsData.map(user => (
        <DialogItems key={user.id} name={user.name} id={user.id}/>
    ))
    let messageElements = state.messageData.map(mes => (
        <Message key={mes.id} message={mes.message} id={mes.id}/>
    ))
    let newMessageText = state.newMessageText;


    return (
        <div>
            <h1>Dialogs</h1>
            <div className="row">
                <div className="col-2">
                    {dialogsElements}
                </div>
                <div className="col-10">
                    <div>{messageElements}</div>
                    <div>
                        <div><textarea
                            onChange={onNewMessageText}
                            value={newMessageText}
                            placeholder='Enter you message'/></div>
                        <div>
                            <button onClick={onSendMessage}>Send
                            </button>
                        </div>
                    </div>

                    {/*<Switch>*/}
                    {/*    <Route exact path={"/dialogs/1"} component={Message}/>*/}
                    {/*</Switch>*/}
                </div>
            </div>

        </div>
    );
};

export default Dialogs;
