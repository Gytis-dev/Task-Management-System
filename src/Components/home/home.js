import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../home/home.scss";
import Navbar from "../../Components/nav-bar/nav-bar";
import Table from "../task/table";
import TaskInfo from "../task/task-info";

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
    },
  ]);

  // statuso pakeitimas
  let changeStatus = (item) => {
    task.map((taskas) => {
      if (taskas.id === item.id) {
        taskas.status = "Approved";
        localStorage.setItem("itemData", JSON.stringify(task));
      }
    });
  };
  let submit = (newItem) => {
    newItem.id = task.length + 1;
    setTask([...task, newItem]);
    localStorage.setItem("itemData", JSON.stringify(task));
  };
  useEffect(() => {
    let itemData = localStorage.getItem("itemData");
    itemData = JSON.parse(itemData);
    itemData ? setTask(itemData) : setTask(task);
  }, []);

  return (
    <Router>
      <div className="home">
        <div className="home-grid-one">
          <Navbar name={useris} handleFormSubmit={submit} />
        </div>
        <div className="home-grid-two">
          <Route
            path="/home"
            exact
            render={(props) => <Table {...props} addItem={task} />}
          />
          <Route
            path="/home/:id"
            exact
            render={(props) => <TaskInfo {...props} change={changeStatus} />}
          />
        </div>
      </div>
    </Router>
  );
};

export default Home;
