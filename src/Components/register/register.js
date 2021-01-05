import React, { useState, useEffect } from "react";
import "../login/login-style.scss";
import { Link } from "react-router-dom";
import "../../global-style/buttons.scss";
import "../../global-style/postion.scss";
import "../../global-style/font.scss";
import axios from "../Axios/config";

const Register = () => {

  useEffect(() => {
    axios
      .get("/users.json")
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  const [user, setUser] = useState({});
  const [error, setError] = useState({
    errorText: "",
    errorStyle: "hidden",
  });
  const [input, setInput] = useState({
    name: "",
    userName: "",
    password: "",
    samePassword: "",
  });

  
  let handleChange = (e) => {
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
    if (usersItems) {
      for (var i in user) {
        if (user[i].name == input.name) {
          setError({
            errorText: "This name not cant be in the system",
            errorStyle: "visible",
          });
          break;
        }
        if (user[i].password == input.password) {
          setError({
            errorText: "This pasword not cant be in the system",
            errorStyle: "visible",
          });
          break;
        }
         if (input.password == '') {
          setError({
            errorText: "This pasword not cant  be empty",
            errorStyle: "visible",
          });
          break;
        }
         if ( input.password == '') {
          setError({
            errorText: "This pasword not cant be empty",
            errorStyle: "visible",
          });
          break;
        }
        if (user[i].name != input.name || user[i].password != input.password) {
          axios
            .post("/users.json", users)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        }
        break;
      }
    } 
  };

  let verification = () => {
    const usersItems = user;
    if (usersItems) {
      for (var i in user) {
        if (user[i].name == input.name || user[i].password == input.password) {
          return "/register";

        }
        else if(  input.name === '' || input.password === ''){
          return "/register";

        }
        else{
          return "/";
        }
        }
    } 
  };

  return (
    <div className="login">
      <div className="login-left" />
      <div className="login-right">
        <div className="login-card ">
          <div className="login-card-name g-center font-sami-big">
            Register in
          </div>
          <div className="g-center">
            <input
              className="g-login-input  login-card-postion-input-left "
              type="text"
              placeholder="Username"
              value={input.name}
              onChange={handleChange}
              id="name"
            />
            <input
              className="g-login-input login-card-postion-input-left login-card-postion-input-right"
              type="text"
              placeholder="Name"
              value={input.userName}
              onChange={handleChange}
              id="userName"
            />
          </div>
          <div className="g-center">
            <input
              className="g-login-input login-card-postion-input-left"
              type="password"
              placeholder="Password"
              value={input.password}
              onChange={handleChange}
              id="password"
            />
            <input
              className="g-login-input  login-card-postion-input-left login-card-postion-input-right"
              type="password"
              placeholder="Same password"
              value={input.samePassword}
              onChange={handleChange}
              id="samePassword"
            />
          </div>
          <div className="login-foter-top">

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
          <div style={{ visibility: error.errorStyle }} className="erroras">
            {error.errorText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
