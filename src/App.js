import React from 'react'
import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";

function App({postData, dialogsData, messageData}) {

    return (
        <Router>
            <div className="container-fluid">
                <Header/>
                <div className="row">
                    <div className="col-2">
                        <Navbar/>
                    </div>
                    <div className="col-10">
                        <Switch>
                            <Route exact path={"/"} component={()=><Profile postData={postData}/>}/>
                            <Route path={"/dialogs"} component={()=> <Dialogs dialogsData={dialogsData} messageData={messageData}/>}/>

                            {/*<Route exact path={"/"} component={Profile}/>*/}
                            {/*<Route path={"/dialogs"} component={Dialogs}/>*/}

                            {/*<Route exact path={"/"} render={() => <Profile postData={postData}/>}/>*/}
                            {/*<Route exact path={"/dialogs"} render={() => <Dialogs dialogsData={dialogsData} messageData={messageData}/>}/>*/}
                        </Switch>
                    </div>
                </div>


            </div>
        </Router>
    );
}

export default App;
