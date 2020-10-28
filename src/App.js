import React, {useState} from 'react';
import Login from "./Components/Login";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import PrivateRoute from "./Components/PrivateRoute";

function App(props) {



  return (
 <BrowserRouter>
    <div>
      <Route path = "/" exact component = {Login}/>
      <PrivateRoute  path = "/home" exact component = {Home}/>
      
      
    </div>
</BrowserRouter>
  );
}

export default App;
