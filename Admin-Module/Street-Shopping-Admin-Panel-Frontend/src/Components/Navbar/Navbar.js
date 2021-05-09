import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MenuItems } from "./MenuItem";
import Login from "../Login/Login";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (<Router>
            <div>
                <nav className="NavbarItems">
                    <h1 className="navbar-logo"><i class="fab fa-stripe-s"></i></h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <button className="btn">
                        <Link className="nav-link" to={"/login"}>Login</Link>
                    </button>
                </nav>



                <Switch>
                    <Route path="/login" component={Login} />
                </Switch>


            </div></Router>
        );
    };
}

export default Navbar;