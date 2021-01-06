import React, {} from "react";
import Login from "./Components/login/login";
import Register from "./Components/register/register";
import {BrowserRouter as Router,Route, Redirect,Switch, useHistory} from 'react-router-dom';
import "./App.scss";
import Home from "./Components/home/home";
import PrivateRoute from "./Components/private-route";
import Error from "./Components/errorPage/error";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <PrivateRoute path="/home" exact component={Home} />
        <Redirect from='/home/myreports' to="/home" />
        <Redirect from='/about' to="/home" />
        <Route path="/" render={() => <Error/>}/>
      </Switch>
    </Router>
  );
}

export default App;