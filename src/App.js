import React from 'react'
import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";

import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className="container-fluid">
            <Header/>
            <div className="row">
                <div className="col-2">
                    <Navbar/>
                </div>
                <div className="col-10">
                    <Switch>
                        <Route path={"/profile"} component={() =>
                            <ProfileContainer/>}
                        />
                        <Route path={"/dialogs"} component={() =>
                            <DialogsContainer/>}
                        />
                        <Route path={"/users"}
                               component={() => <UsersContainer/>}/>

                    </Switch>
                </div>
            </div>
        </div>

    );
}

export default App;
