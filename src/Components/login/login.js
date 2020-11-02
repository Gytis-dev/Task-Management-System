import React, { useState } from "react";
import "../login/login-style.scss";
import { Link } from "react-router-dom";
import loginVerification from "../login/login-verification";
import "../../global-style/buttons.scss";
import "../../global-style/postion.scss";
import "../../global-style/font.scss";

const Login = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  let users = [
    {
      name: "Gytis",
      password: 123,
    },
    {
      name: "Modestas",
      password: 123,
    },
  ];

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
    users.forEach((user) => {
      if (user.name == input.username && user.password == input.password) {
        userStatus = true;
      }
    });
    if (userStatus === true) {
      loginVerification.isLogged();
      localStorage.setItem("useris", input.username);
      return "/home";
    }
  };

  let x = localStorage.getItem("s");
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
              value={input.username}
              onChange={handleChange}
              id="name"
            />
          </div>
          <div className="g-center">
            <input
              className="g-login-input"
              type="password"
              placeholder="Password"
              value={input.password}
              onChange={handleChange}
              id="pass"
            />
          </div>
          <div className="g-center">
            <Link to={verification}>
              {" "}
              <button className="g-btn-login font-small">GET STARTED</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
