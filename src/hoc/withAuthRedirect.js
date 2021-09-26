import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuthenticated: state.authUser.isAuthenticated
})

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        //проверка на авторизацию и показ страницы
        if (!props.isAuthenticated) {
            return <Redirect to={'/login'}/>
        }

        return (<Component {...props}/>)

    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
