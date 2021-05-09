import React, { useState } from 'react';
import { NavLink } from "react-router-dom"

import "bulma/css/bulma.min.css";
import "./TestNavbar.css";

const TestNavbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a role="button" className={`navbar-burger burger ${isOpen && "is-active"}`} aria-label="menu" aroa-aria-expanded="false" onClick={() => setOpen(!isOpen)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                    <div className={`navbar-menu ${isOpen && 'is-active'}`}>
                        <div className="navbar-start">
                            <NavLink className="navbar-item" activeClassName="is-active" to="/">
                                Home
                            </NavLink>
                            <NavLink className="navbar-item" activeClassName="is-active" to="/deliveryboy">
                                Delivery Boy
                            </NavLink>
                            <NavLink className="navbar-item" activeClassName="is-active" to="/products">
                                Products
                            </NavLink>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="button is-white">
                                    {/* <a className="button is-white">Log In</a> */}
                                    <NavLink className="navbar-item" activeClassName="is-active" to="/login">
                                        Login
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TestNavbar;

