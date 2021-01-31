import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import loginVerification from "./login/login-verification";

const PrivateRoute = ({ component: Component, ...rest }) => {

let user = localStorage.getItem("user");

  return (
    <Route
      {...rest}
      render={(props) =>
        loginVerification.login || user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
