import React from 'react';
import {NavLink} from "react-router-dom";

const DialogItems = ({name, id}) => {
    return (
        <nav className="navbar navbar-nav navbar-light bg-light flex-column">
            <div className="justify-content-center">
                <nav className="navbar-nav justify-content-center">
                    <NavLink className="nav-link" exact to={`/dialogs/${id}`}>{name}</NavLink>
                </nav>
            </div>
        </nav>
    );
};

export default DialogItems;
