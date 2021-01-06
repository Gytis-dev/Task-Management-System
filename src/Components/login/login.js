import React,{useState,useEffect} from 'react'  
import "../login/login-style.scss";
import { Link } from "react-router-dom";
import loginVerification from "../login/login-verification";
import "../../global-style/buttons.scss";
import "../../global-style/postion.scss";
import "../../global-style/font.scss";
import axios from '../Axios/config';


const Login = () => {

  useEffect(() => {
    axios.get('/users.json').then(response => {
    setUser(response.data)
  })
  }, []);
  
  const [user, setUser] = useState({})  
  const [input, setInput] = useState({ username: "", password: "" });
  const [error, setError] = useState({
    errorText: "",
    errorStyle: "hidden"
  })

  let handleChange = (e) => {
    switch (e.target.id) {
      case "name":
        setInput({ ...input, username: e.target.value });
        break;
      case "pass":
        setInput({ ...input, password: e.target.value });
        break;
    }
  };

  let verification = () => {
    let userStatus = false;

    for (var i in user) {
      if (user[i].name == input.username && user[i].password == input.password) {
        userStatus = true;
        // for routing purposes
        localStorage.setItem("token", user[i].name);
      }
      if (userStatus === true) {

        axios.patch("/currentUser.json", {name: input.username})
        .then (res => console.log("Logged in succesfully"))
        .catch (err => console.log(err))

        loginVerification.isLogged();
        return "/home";
      }
    }
  };


  let checkError = () => {
    for (var i in user) {
      if (user[i].name != input.username || user[i].password != input.password) {
        setError({ errorText: "Incorrect username or password", errorStyle: "visible" })
      }
    }
  }
  return (
    <div className="login">
      <div className="login-left" />
      <div className="login-right">
        <div className="login-card ">
          <div className="login-card-name g-center font-sami-big">Log in</div>
          <div className="g-center">
            <input
              className="g-login-input"
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
              id="name"
            />
          </div>
          <div className="g-center">
            <input
              className="g-login-input"
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              id="pass"
            />
          </div>
        <div className="login-foter">
          <div className="g-right ">
            <Link to={verification}>
              <button className="g-btn-actyve font-small" onClick={checkError}>Login</button>
            </Link>
          </div>
          <div className="g-right">
            <Link to ="/register">
              <button className="g-btn-comment font-small" >Register</button>
            </Link>
          </div>
          </div>
          <div style={{ visibility: error.errorStyle }} className="erroras">
            {error.errorText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
