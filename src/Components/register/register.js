import React, { useState, useEffect } from "react";
import "../login/login-style.scss";
import { Link } from "react-router-dom";
import "../../global-style/buttons.scss";
import "../../global-style/postion.scss";
import "../../global-style/font.scss";
import axios from '../Axios/config';

const Register = () => {
  useEffect(() => {
    axios
      .get("/users.json")
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  const [user, setUser] = useState({});
  const [errorUser, setErrorUser] = useState({
    errorUserText: "",
    errorUserStyle: "hidden",
  });
  const [error, setError] = useState({
    errorText: "",
    errorStyle: "hidden",
  });
  const [errorPassword, setErrorPassword] = useState({
    errorTextPassword: "",
    errorStylePassword: "hidden",
  });

  const [errorSamePassword, setErrorSamePassword] = useState({
    errorSameTextPassword: "",
    errorSameStylePassword: "hidden",
  });
  const [input, setInput] = useState({
    name: "",
    userName: "",
    password: "",
    samePassword: "",
  });
  let handleChange = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.id) {
      case "name":
        setInput({ ...input, name: e.target.value });
        break;
      case "userName":
        setInput({ ...input, userName: e.target.value });
        break;
      case "password":
        setInput({ ...input, password: e.target.value });
        break;
      case "samePassword":
        setInput({ ...input, samePassword: e.target.value });
        break;
    }
  };

  const pushDateUsers = () => {
    const users = {
      name: input.name,
      userName: input.userName,
      password: input.password,
      samePassword: input.samePassword,
    };
    const usersItems = user;
    if (input.name.length < 6) {
      setError({
        errorText: "This name to be more 6",
        errorStyle: "visible",
      });
    }
    if (input.name.length > 6) {
      setError({
        errorText: "",
        errorStyle: "",
      });
    }

    if (input.name !== input.userName) {
      setErrorUser({
        errorUserText: "This name not same",
        errorUserStyle: "visible",
      });
    }
    if (input.name === input.userName) {
      setErrorUser({
        errorUserText: "",
        errorUserStyle: "",
      });
    }

    if (input.password.length < 9) {
      setErrorPassword({
        errorTextPassword: "This password to be more 9",
        errorStylePassword: "visible",
      });
    }
    if (input.password.length > 9) {
      setErrorPassword({
        errorTextPassword: "",
        errorStylePassword: "",
      });
    }

    if (input.password !== input.samePassword) {
      setErrorSamePassword({
        errorSameTextPassword: "This password not same",
        errorSameStylePassword: "visible",
      });
    }
    if (input.password === input.samePassword) {
      setErrorSamePassword({
        errorSameTextPassword: "",
        errorSameStylePassword: "",
      });
    }

    if (usersItems) {
      const value = Object.keys(usersItems).find(
        (key) => usersItems[key].name === input.name
      );
      if (value) {
        setError({
          errorText: "This name is already in use",
          errorStyle: "visible",
        });
      }
      
      if (
        input.name.length > 6 &&
        input.password.length > 9 &&
        value === undefined &&
        input.password === input.samePassword &&
        input.name === input.userName
      ) {
        axios
          .post("/users.json", users)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        axios.get("/users.json").then((response) => {
          setUser(response.data);
        });
      }
    }
  };

  let verification = () => {
    const usersItems = user;
    if (usersItems) {
      const value = Object.keys(usersItems).find(
        (key) => usersItems[key].name === input.name
      );
      if (
        input.name.length > 6 &&
        input.password.length > 9 &&
        value === undefined &&
        input.password === input.samePassword &&
        input.name === input.userName
      ) {
        return "/";
      } else {
        return "/register";
      }
    }
  };

  return (
    <div className="login">
      <div className="login-left" />
      <div className="login-right">
      <div className="login-foter g-right">
          
          <Link to="/">
            <button
              className="g-btn-right-register font-small"
            >
              Log in
            </button>
          </Link>
      </div>
        <div className="login-card-register">
          <div className="login-card-register-name g-center font-sami-big">
            Register in
          </div>
          <div className="g-center">
            <label className="error">
              <input
                className="g-login-input  login-card-register-postion-input-left "
                type="text"
                placeholder="Username"
                value={input.name}
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

            <label className="error">
              <input
                className="g-login-input login-card-register-postion-input-left login-card-register-postion-input-right"
                type="text"
                placeholder="Name"
                value={input.userName}
                onChange={handleChange}
                id="userName"
              />
              <span
                className="erroras"
                style={{ visibility: errorUser.errorUserStyle }}
              >
                {errorUser.errorUserText}
              </span>
            </label>
          </div>
          <div className="g-center">
            <label className="error">
              <input
                className="g-login-input login-card-register-postion-input-left"
                type="password"
                placeholder="Password"
                value={input.password}
                onChange={handleChange}
                id="password"
              />
              <span
                className="erroras"
                style={{ visibility: errorPassword.errorStylePassword }}
              >
                {errorPassword.errorTextPassword}
              </span>
            </label>

            <label className="error">
              <input
                className="g-login-input  login-card-register-postion-input-left login-card-register-postion-input-right"
                type="password"
                placeholder="Same password"
                value={input.samePassword}
                onChange={handleChange}
                id="samePassword"
              />
              <span
                className="erroras"
                style={{ visibility: errorSamePassword.errorSameStylePassword }}
              >
                {errorSamePassword.errorSameTextPassword}
              </span>
            </label>
          </div>
          <div className="login-foter">
            <div className="g-center">
              <Link to={verification}>
                <button
                  onClick={pushDateUsers}
                  className="g-btn-actyve font-small"
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Register;
