import React from 'react';
// import TestNavbar from "./Components/Navbar/TestNavbar";
import Dashboard from "../src/Components/Dashboard/Dashboard";
import Home from "./Components/Dashboard/Pages/Home";
import DeliveryBoy from "./Components/Dashboard/Pages/DeliveryBoy";
import Products from "./Components/Dashboard/Pages/Products";
import Login from "./Components/Login/Login";
import Users from "./Components/Dashboard/Pages/Users";
import Subscription from "./Components/Dashboard/Pages/Subscription";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./app.css";

function app() {

  return (
    <BrowserRouter>
      <Dashboard />
      <div style={{ marginTop: '3%' }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/deliveryboy">
            <DeliveryBoy />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/subscription">
            <Subscription />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    // <div>
    //   {/* <Dashboard /> */}
    //   <Users />
    // </div>
  );
};

export default app;