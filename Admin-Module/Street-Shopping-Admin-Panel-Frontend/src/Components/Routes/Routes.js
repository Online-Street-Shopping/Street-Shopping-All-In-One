import React from 'react';
import Login from "../Login/Login";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;