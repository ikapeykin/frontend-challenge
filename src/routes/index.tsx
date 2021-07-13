import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";


export const Routes = () => {
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/"/>
            <Route exact={true} path="/users"/>
        </Switch>
    </BrowserRouter>
}
