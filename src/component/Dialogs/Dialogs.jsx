import React from 'react';
import DialogItems from "./DialogItems/DialogItems";
// import {Route, Switch} from "react-router-dom";
import {Message} from "./Message/Message";


const Dialogs = ({messageData, dialogsData}) => {


    let dialogsElements = dialogsData.map(user => (
        <DialogItems key={user.id} name={user.name} id={user.id}/>
    ))
    let messageElements = messageData.map(mes => (
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
                    {messageElements}

                    {/*<Switch>*/}
                    {/*    <Route exact path={"/dialogs/1"} component={Message}/>*/}
                    {/*</Switch>*/}
                </div>
            </div>

        </div>
    );
};

export default Dialogs;
