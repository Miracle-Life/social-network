import React from 'react'
import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import Profile from "./component/Profile/Profile";

import DialogsContainer from "./component/Dialogs/DialogsContainer";

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
                        <Route exact path={"/"} component={() =>
                            <Profile/>}
                        />
                        <Route path={"/dialogs"} component={() =>
                            <DialogsContainer/>}
                        />

                        {/*<Route exact path={"/"} component={Profile}/>*/}
                        {/*<Route path={"/dialogs"} component={Dialogs}/>*/}

                        {/*<Route exact path={"/"} render={() => <Profile postData={postData}/>}/>*/}
                        {/*<Route exact path={"/dialogs"} render={() => <Dialogs dialogsData={dialogsData} messageData={messageData}/>}/>*/}
                    </Switch>
                </div>
            </div>
        </div>

    );
}

export default App;
