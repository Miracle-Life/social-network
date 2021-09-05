import React from 'react';
import head from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={`container-fluid bg-dark ${head.header_container}`}>
            <div className="container">
                <nav className="navbar navbar-dark bg-dark justify-content-between">
                    <NavLink className="navbar-brand"
                             style={{fontFamily: 'Netflix', fontSize: '2rem'}} to="/">
                        Social-Network
                    </NavLink>
                    <NavLink className="navbar-brand"
                             style={{fontFamily: 'Netflix', fontSize: '1rem'}} to="/">
                        Login
                    </NavLink>
                </nav>

            </div>
        </div>
    );
};

export default Header;
