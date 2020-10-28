import React, { useState } from "react";
import "../Components/LoginStyle.css";
import { Link } from "react-router-dom";
import loginVerification from "./loginVerification";


const Login = (props) => {
    // Login input state
    const [input, setInput] = useState({ username: "", password: "" });

    // Users
    let users = [
        {
            name: "Gytis",
            password: 123
        },
        {
            name: "Modestas",
            password: 123
        }
    ]


    // Login input handler
    let handleChange = (e) => {
        switch (e.target.id) {
            case "name": setInput({ ...input, username: e.target.value });
                break;
            case "pass": setInput({ ...input, password: e.target.value });
                break;
        }
    }

    let verification = () => {
        let userStatus = false;
        users.forEach((user) => {
            if (user.name == input.username && user.password == input.password) {
                userStatus = true;
            }
        })
        if (userStatus === true) {

            loginVerification.isLogged();
            localStorage.setItem("useris", input.username);
            return "/home";
        }
    }

    let x = localStorage.getItem("s");
    return (
        <div className="login">
            <div className="login-wrap">
                <div className="web-name">
                    Task management system
                </div>

                <div>
                    <div className="login-title">Username</div>
                    <input className="input"
                        type="text"
                        placeholder="Enter your username..."
                        value={input.username}
                        onChange={handleChange}
                        id="name"
                    />
                </div>
                <div>
                    <div className="login-title">Password</div>
                    <input className="input"
                        placeholder="Enter your password..."
                        value={input.password}
                        onChange={handleChange}
                        id="pass"
                    />
                </div>
                <div className="btn-postion">

                    <button className="btn-style"><Link to={verification}>Click</Link></button>
                </div>
            </div>
        </div>

    );
}

export default Login;