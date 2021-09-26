import React from 'react';
import head from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <div className={`container-fluid bg-dark ${head.header_container}`}>
            <div className="container">
                <nav className="navbar navbar-dark bg-dark justify-content-between">
                    <NavLink className="navbar-brand"
                             style={{fontFamily: 'Netflix', fontSize: '2rem'}} to="/">
                        Social-Network
                    </NavLink>
                    <div>
                        {props.isAuthenticated ?
                           <div className="navbar-brand">{props.login}</div>
                            :
                            <NavLink to={'/login'}
                                     className="navbar-brand"
                                     style={{fontFamily: 'Netflix', fontSize: '1rem'}}>
                                Login
                            </NavLink>
                        }

                    </div>

                </nav>

            </div>
        </div>
    );
};

export default Header;
