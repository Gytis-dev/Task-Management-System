import React, {} from "react";
import Login from "./Components/login/login";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/home/home";
import PrivateRoute from "./Components/private-route";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/home" exact component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
