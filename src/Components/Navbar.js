import { getByTestId } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "../Components/NavStyle.css";
import { Link } from "react-router-dom";




const Navbar = (props) => {

    const [style, setStyle] = useState({ visibility: "hidden" })

    const [input, setInput] = useState({
        name: "",
        reporter: "",
        priority: "High",
        date: "",
        status: "",
        comment: ""
    })
    const [error, setError] = useState({
        nameError: "",
        reporterError: "",
        dateError: "",
        commentError: ""
    })
    // Form validation
    let formValid = () => {
        let nameErr = "";
        let reporterErr = "";
        let dateErr = "";
        let commentErr = "";

        let arr = [];

        if (input.name.length < 3) {
            nameErr = "Enter proper name";
            arr.push(1);

        } else { nameErr = ""; }

        if (input.reporter.length < 3) {
            reporterErr = "Enter reporter";
            arr.push(1);
        } else { reporterErr = ""; }

        if (input.date === "") {
            dateErr = "Enter valid date";
            arr.push(1);
        } else { dateErr = ""; }

        if (input.comment === "") {
            commentErr = "Please provide detailed requirements for the task";
            arr.push(1);
        } else { commentErr = ""; }

        setError({ nameError: nameErr, reporterError: reporterErr, dateError: dateErr, commentError: commentErr });

        if (arr.length >= 1) {
            return false;
        } else {
            return true;
        }
    }

    let handleSubmit = (e) => {

        let isValid = formValid();

        if (isValid === true) {
            console.log("yes")
            let object = {
                id: 3,
                name: input.name,
                reporter: input.reporter,
                priority: input.priority,
                date: input.date,
                status: "Submitted",
                comment: input.comment
            }

            props.handleFormSubmit(object);

            setStyle({ visibility: "hidden" })
            setInput({ name: "", reporter: "", priority: "High", date: "", status: "", comment: "" });
        }

    }


    return (
        <div className="nav">
            <div className="nav-2">

                <ul>
                    <Link to = "/home"><li>Dashboard</li></Link>
                    <li onClick={() => setStyle({ visibility: "visible" })}>Create Issue</li>
                    <li>User Info</li>
                    <li>My Reports</li>
                </ul>
            </div>

            <div className="nav-1 ">
                <h3>Logged in as: {props.name}</h3>

            </div>

            <div className="createIssue" style={style}>
                <div className="close-button" onClick={(e) => setStyle({ visibility: "hidden" })}>x</div>
                <div className="grid-createIssue">
                    <div className="createIssue-name">Create new Issue</div>

                    <div  >
                        <label className="input-label">Task name</label>
                        <input className="input-design" type="text" placeholder="Enter task name" value={input.name} onChange={(e) => { setInput({ ...input, name: e.target.value }) }} />
                        <div className="error-name">{error.nameError}</div>
                    </div>

                    <div>
                        <label className="input-label">Reporter</label>
                        <input className="input-design" type="text" placeholder="Enter reporter" value={input.reporter} onChange={(e) => { setInput({ ...input, reporter: e.target.value }) }} />
                        <div className="error-name">{error.reporterError}</div>
                    </div>

                    <div>
                        <label className="input-label">Priority</label>
                        <select className="input-design" value={input.priority} onChange={(e) => { setInput({ ...input, priority: e.target.value }) }}>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>

                    <div>
                        <label className="input-label">Date</label>
                        <input className="input-design" type="text" placeholder="Enter date" value={input.date} onChange={(e) => { setInput({ ...input, date: e.target.value }) }} />
                        <div className="error-name">{error.dateError}</div>
                    </div>


                    <div>
                        <label className="input-label">Comment</label>
                        <textarea className="input-design-textarea" type="text" value={input.comment} onChange={(e) => { setInput({ ...input, comment: e.target.value }) }}></textarea>
                        <div className="error-name">{error.commentError}</div>
                    </div>

                    <div className="input-button">
                        <button onClick={handleSubmit}>Submit request</button>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Navbar;
