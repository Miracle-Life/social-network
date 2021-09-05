import React from 'react';
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    return (
                <nav className="navbar navbar-nav navbar-dark bg-dark flex-column">
                    <div className="justify-content-center">
                        <nav className="navbar-nav justify-content-center">
                            <NavLink className="nav-link" exact to="/">Profile</NavLink>
                            <NavLink className="nav-link" to="/dialogs">Message</NavLink>
                            <NavLink className="nav-link" to="/favorite">News</NavLink>
                            <NavLink className="nav-link" to="/disfavoured">Music</NavLink>
                            <NavLink className="nav-link" to="/analytic">Settings</NavLink>
                        </nav>
                    </div>
                </nav>
    );
};

export default Navbar;
