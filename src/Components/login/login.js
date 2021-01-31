import React, { useState, useEffect } from "react";
import "../login/login-style.scss";
import { Link } from "react-router-dom";
import loginVerification from "../login/login-verification";
import "../../global-style/buttons.scss";
import "../../global-style/position.scss";
import "../../global-style/font.scss";
import axios from '../Axios/config';

const Login = () => {
  useEffect(() => {
    axios.get('/users.json').then(response => {
    setUser(response.data)
  })
  }, []);
  const [user, setUser] = useState({});
  const [input, setInput] = useState({ username: "", password: "" });
  const [error, setError] = useState({
    errorText: "",
    errorStyle: "hidden",
  });

  const [errorPassword, setErrorPassword] = useState({
    errorTextPassword: "",
    errorStylePassword: "hidden",
  });

  let handleChange = (e) => {
    // eslint-disable-next-line default-case
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
    const value = Object.keys(user).find(
      (key) => user[key].name === input.username &&  user[key].password === input.password
    );
    if (value !== undefined && input.password !== '' && input.username !== '') {
    
      loginVerification.isLogged();
      localStorage.setItem("token", input.username);

      axios.patch("/currentUser.json", {name: input.username})
        .then(res => console.log("success"))
        .catch(err => console.log(err))
      return "/home";
    }
    else{
      return "/";
    }
  };


  let checkError = () => {
    const value = Object.keys(user).find(
      (key) => user[key].name === input.username
    );
    const valuePassword = Object.keys(user).find(
      (key) => user[key].password === input.password
    );
    if (value) {
      setError({ errorText: "", errorStyle: "visible" });
    }
    if (valuePassword) {
      setErrorPassword({
        errorTextPassword: "",
        errorStylePassword: "visible",
      });
    }
    if (value === undefined ) {
      setError({ errorText: "Incorrect username", errorStyle: "visible" });
    }
    if (valuePassword === undefined || input.password !== '') {
      setErrorPassword({
        errorTextPassword: "Incorrect password",
        errorStylePassword: "visible",
      });    }
  };
  return (
    <div className="login">
      <div className="login-left" />
      <div className="login-right">
        <div className="g-right">
          <Link to="/register">
            <button className="g-btn-right-login font-small">Register</button>
          </Link>
        </div>
        <div className="login-card ">
          <div className="login-card-name g-center font-sami-big" style={{ marginLeft: "15px" }}>Log in</div>
          <div className="g-center">
            <label className="error" style={{ width: "100%" }}>
              <input
                style={{ width: "100%" }}
                className="g-login-input"
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={handleChange}
                id="name"
              />
              <span
                className="erroras"
                style={{ visibility: error.errorStyle }}
              >
                {error.errorText}
              </span>
            </label>
          </div>
          <div className="g-center">
            <label className="error" style={{ width: "100%" }}>
              <input
                style={{ width: "100%" }}
                className="g-login-input"
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                id="pass"
              />
              <span
                className="erroras"
                style={{ visibility: errorPassword.errorStylePassword }}
              >
                {errorPassword.errorTextPassword}
              </span>
            </label>
          </div>
          <div className="login-foter g-center">
            <Link to={verification}>
              <button className="g-btn-actyve font-small" style={{ marginLeft: "15px" }} onClick={checkError}>
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
