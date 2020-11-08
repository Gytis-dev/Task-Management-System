import React, {} from "react";
import Login from "./Components/login/login";
import {BrowserRouter as Router,Route, Redirect,Switch} from 'react-router-dom';
import "./App.scss";
import Home from "./Components/home/home";
import PrivateRoute from "./Components/private-route";
import Error from "./Components/errorPage/error";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/home" exact component={Home} />
        {/* <PrivateRoute path="/home/myreports/:id" component={Home}/> */}
        <Redirect from='/home/myreports' to="/home" />
        <Route path="/" render={() => <Error/>}/>
      </Switch>
    </Router>
  );
}

export default App;
