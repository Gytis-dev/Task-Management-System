import React, { useState, Component, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../Components/Home.css";
import "../Components/taskStyle.css"
import Navbar from "../Components/Navbar";
import LeftSection from "../Components/LeftSection";
import Table from "../Components/Table";
import TaskInfo from "../Components/TaskInfo";
import { loginVerification, loginStatus } from "../Components/loginVerification";

const Home = () => {
    let useris = localStorage.getItem("useris");

    const [task, setTask] = useState([
        {
            id: 1,
            name: "Forgot password",
            reporter: "Random person",
            priority: "low",
            date: "2020-10-06",
            status: "Submitted",
            comment: "skskskskskskskskskskskskks",
          
        },
        {
            id: 2,
            name: "Extract report",
            reporter: "manager",
            priority: "High",
            date: "2020-10-04",
            status: "Submitted",
            comment: "skskskskskskskskskskskskks",
           
        },
        {
            id: 3,
            name: "Change system",
            reporter: "some other guy",
            priority: "Middle",
            date: "2020-10-02",
            status: "Submitted",
            comment: "skskskskskskskskskskskskks",
          
        }
    ])
    const [open, setOpen] = useState();

    // statuso pakeitimas
    let changeStatus = (item) => {
        task.map((taskas) => {
            if (taskas.id === item.id) {
                taskas.status = "Approved";
                localStorage.setItem("itemData", JSON.stringify(task));
            }
        })
        updateOpenIssue();
    }

    let updateOpenIssue = () => {
        let updatingOpenIssues = task.filter((openIssue) => openIssue.status === "Submitted");
        setOpen(updatingOpenIssues);
    }

    let submit = (newItem) => {
        newItem.id = task.length + 1;
        setTask([...task, newItem]);
        localStorage.setItem("itemData", JSON.stringify(task));
        updateOpenIssue();
    }
    useEffect(() => {
        let itemData = localStorage.getItem("itemData");
        itemData = JSON.parse(itemData);
        itemData ? setTask(itemData) : setTask(task);

    // Uzduociu filtravimui updeitinam taskus pagal ju statusa
    
        if (itemData) {
            let openData = itemData.filter((openIssue) => 
            openIssue.status === "Submitted"
        )
        setOpen(openData)  
        }
        else {
            setOpen(task);
        }     
    }, [])
    
    return (
        <Router>
            <div className="wrapper-home">
                <Navbar name={useris} handleFormSubmit={submit} />
                <LeftSection />
                <Route path="/home" exact render={(props) => <Table {...props} addItem={task} />} />
                <Route path="/home/open" exact render={(props) => <Table {...props} addItem={open}/>}/>
                <Route path="/home/open/:id" exact render={(props) => <TaskInfo {...props} change={changeStatus} />}/>      
            </div>
        </Router>
    );

}



export default Home;