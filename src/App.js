import React, {Suspense, lazy, useEffect} from 'react'
import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch, withRouter} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import UsersContainer from "./component/Users/UsersContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
//import ProfileContainer from "./component/Profile/ProfileContainer";
// import DialogsContainer from "./component/Dialogs/DialogsContainer";
// import LoginPage from "./component/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/app.reducer";
import Preloader from "./component/common/Preloader/Preloader";

const DialogsContainer = lazy(() => import('./component/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./component/Profile/ProfileContainer'));
const LoginPage = lazy(() => import('./component/Login/Login'));

const App = (props) => {
    useEffect(() => {
        props.initializedApp()
    }, [props]);


    if (!props.initialize) {
        return <Preloader/>
    }
    return (
        <div className="container-fluid">
            <HeaderContainer/>
            <div className="row">
                <div className="col-2">
                    <Navbar/>
                </div>
                <div className="col-10">
                    <Suspense fallback={<Preloader/>}>
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
                    </Suspense>
                </div>
            </div>
        </div>

    );
}
const mapStateToProps = state => ({
    initialize: state.app.initialize
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedApp})
)(App);

