import React, { useState } from "react";
import "../nav-bar/nav-style.scss";
import { Link, NavLink } from "react-router-dom";
import "../../global-style/font.scss";
import "../../global-style/postion.scss";
import {
  faHome,
  faPlusCircle,
  faUser,
  faFlag,
  faSignOutAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (props) => {
  const [style, setStyle] = useState({ display: "none" });

  const [input, setInput] = useState({
    name: "",
    reporter: "",
    priority: "High",
    date: "",
    status: "",
    comment: "",
  });
  const [error, setError] = useState({
    nameError: "",
    reporterError: "",
    dateError: "",
    commentError: "",
  });

  let formValid = () => {
    let nameErr = "";
    let reporterErr = "";
    let dateErr = "";
    let commentErr = "";

    let arr = [];

    if (input.name.length < 3) {
      nameErr = "Enter proper name";
      arr.push(1);
    } else {
      nameErr = "";
    }

    if (input.date === "" || input.date.length > 10) {
      dateErr = "Enter valid date";
      arr.push(1);
    } else {
      dateErr = "";
    }

    if (input.comment === "") {
      commentErr = "Please provide detailed requirements for the task";
      arr.push(1);
    } else {
      commentErr = "";
    }

    setError({
      nameError: nameErr,
      reporterError: reporterErr,
      dateError: dateErr,
      commentError: commentErr,
    });

    if (arr.length >= 1) {
      return false;
    } else {
      return true;
    }
  };

  let handleSubmit = (e) => {
    let isValid = formValid();

    if (isValid === true) {
      console.log(input.date);
      let object = {
        id: 3,
        name: input.name,
        reporter: "",
        priority: input.priority,
        date: input.date,
        status: "Submitted",
        comment: input.comment,
        koment: [],
      };

      props.handleFormSubmit(object);

      setStyle({ display: "none" });
      setInput({
        name: "",
        priority: "High",
        date: "",
        status: "",
        comment: "",
      });
    }
  };
  function logout() {
    window.location.href = "/";
  }

  const [searchValue, setSearchValue] = useState("");

  let performSearch = (e) => {
    setSearchValue(e.target.value);
    props.search(e.target.value);
  };

  return (
    <div className="parent">
      <div className="overlay-createIssue" style={style} />


      <div className="navbar font-normal ">
      <div className="navbar-searchbar">
            <Link to="/home/search">
              {" "}
              <FontAwesomeIcon
                className="navbar-icon-postion navbar-search-icon"
                icon={faSearch}
              />{" "}
            </Link>
            <input
               className="navbar-search-style"
              type="text"
              placeholder="Search by Task name..."
              value={searchValue}
              id="search"
              onChange={(e) => {
                performSearch(e);
              }}
            />
          </div>
        <div className="navbar-menu-one g-left">
          <NavLink exact to="/home" activeStyle={{ color: "#fe4066" }}>
            <div className="navbar-design">
              <FontAwesomeIcon className="navbar-icon-postion" icon={faHome} />
              Dashboard
            </div>
          </NavLink>
          <NavLink to ="/home/userinformation">
          <div className="navbar-design">
            <FontAwesomeIcon className="navbar-icon-postion" icon={faUser} />
            About
          </div>
          </NavLink>
          <div
            className="navbar-design"
            onClick={() => setStyle({ display: "block" })}
          >
            <FontAwesomeIcon
              className="navbar-icon-postion"
              icon={faPlusCircle}
            />
            Create Issue
          </div>
        
          <NavLink
            exact
            to="/home/myreports"
            activeStyle={{ color: "#fe4066" }}
          >
            <div className="navbar-design  ">
              {" "}
              <FontAwesomeIcon className="navbar-icon-postion" icon={faFlag} />
              My Reports
            </div>
          </NavLink>
       
        </div>
        <div onClick={() => logout()} className="navbar-design navbar-footer">
            <FontAwesomeIcon
              className="navbar-icon-postion"
              icon={faSignOutAlt}
            />
            Log out
          </div>
      </div>
      <div className="createIssue" style={style}>
        <div
          className="createIssue-close-button"
          onClick={(e) => setStyle({ display: "none" })}
        />
        <div className="createIssue-grid-createIssue">
          <div className="createIssue-name font-normal-big">
            Create new Issue
          </div>
          <div className="createIssue-body g-center">
            <div>
              <input
                className="createIssue-input-design font-very-small"
                type="text"
                placeholder="Enter task name"
                value={input.name}
                onChange={(e) => {
                  setInput({ ...input, name: e.target.value });
                }}
              />
              <div className="error-name font-very-small">
                {error.nameError}
              </div>
            </div>
            <div>
              <select
                className="createIssue-input-design  createIssue-input-design-option font-very-small"
                value={input.priority}
                onChange={(e) => {
                  setInput({ ...input, priority: e.target.value });
                }}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <div className="error-name font-very-small" />
            </div>
            <div>
              <input
                className="createIssue-input-design  font-very-small"
                type="date"
                placeholder="Enter date"
                value={input.date}
                onChange={(e) => {
                  setInput({ ...input, date: e.target.value });
                }}
              />
              <div className="error-name font-very-small">
                {error.dateError}
              </div>
            </div>
            <div>
              <textarea
                className="createIssue-input-design-textarea  font-very-small"
                type="text"
                placeholder="Comment"
                value={input.comment}
                onChange={(e) => {
                  setInput({ ...input, comment: e.target.value });
                }}
              ></textarea>
              <div className="error-name font-very-small">
                {error.commentError}
              </div>
            </div>
          </div>
          <div className="g-right">
            <div
              className="font-normal-font g-btn g-center createIssue-input-button-postion  "
              onClick={() => setStyle({ display: "none" })}
            >
              Cancel
            </div>
            <div
              className="font-normal-font g-btn-actyve g-center"
              onClick={handleSubmit}
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
