import React from 'react'
import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import LoginPage from "./component/Login/Login";

const App = (props) => {
    return (
        <div className="container-fluid">
            <HeaderContainer/>
            <div className="row">
                <div className="col-2">
                    <Navbar/>
                </div>
                <div className="col-10">
                    <Switch>
                        <Route path={"/profile/:userId?"} component={() =>
                            <ProfileContainer/>}
                        />
                        <Route path={"/dialogs"} component={() =>
                            <DialogsContainer/>}
                        />
                        <Route path={"/users"}
                               component={() => <UsersContainer/>}/>
                        <Route path={"/login"}
                               component={() => <LoginPage/>}/>

                    </Switch>
                </div>
            </div>
        </div>

    );
}

export default App;
