import React, { Component } from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import loginVerification from "./loginVerification";


const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
                loginVerification.login || localStorage.getItem("useris") ? 
                <Component {...props} />
                :<Redirect to = "/" />
            
        )} />
    );
 
};


export default PrivateRoute;