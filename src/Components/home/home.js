import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Link, useHistory, Redirect, Switch } from "react-router-dom";
import "../home/home.scss";
import Navbar from "../../Components/nav-bar/nav-bar";
import Table from "../task/table";
import TaskInfo from "../task/task-info";
import About from "../About/About";
import API from "../Axios/config"
import { faTasks } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {

  const [trigger, setTrigger] = useState(false);
  const [task, setTask] = useState([{}]);
  const [count, setCount] = useState(0);
  const [load, setload] = useState({ display: "none", text: "" });
  const [currentUser, setCurrentUser] = useState();
  const [myReports, setMyReports] = useState();

  useEffect(() => {
    async function callApi(){
        let items = await API.get("/todoList.json");
        let array = [];

        for (let val in items.data) {
          items.data[val].id = val;
          array.push(items.data[val])
        }

        setTask(array);
        setload({ display: "none", text: "" })

        let myreps = await API.get("/currentUser.json");
        let reps = [];
        let user = myreps.data.name;
        let filtered = array.filter(item => item.reporter === user);
        setCurrentUser(user);
        setMyReports(filtered);
    }
    callApi();
  }, [trigger])

  // Adding new items
  let addNewItem = (newItem) => {
    newItem.number = task.length + 1;

    setload({ display: "block", text: "LOADING" })
    API.post("/todoList.json", newItem)
      .then(response => {
        setTrigger(!trigger);
      })
      .catch(err => console.log("error"));
  }

  let handleSearch = (value) => {
    let search = task.filter(item => item.name.toLowerCase().includes(value));

    if (value.length > 0) {
      setTask(search)
      setCount(task.length);
    }
    else {
      API.get("/todoList.json")
        .then((response) => {
          let array = [];
          let data = response.data;

          for (let val in data) {
            data[val].id = val;
            array.push(data[val])
          }
          setTask(array);
        })
        .catch((err) => { console.log("Error with firebase: " + err) })
      setCount(0);
    }
  }

  return (
    <Router>

      <div className="home">
        <div className="home-grid-one">
          <Navbar handleFormSubmit={addNewItem} search={handleSearch} counterTasks={count} current={currentUser} />
        </div>

        <div className="home-grid-two">
          <div className="parentLoader">
            <div className="loader" style={load}></div>
            <h3 className="loader-text">{load.text}</h3>
          </div>


          <Route
            path="/home"
            exact
            render={(props) => <Table {...props} addItem={task} />}
          />

          <Route
            path="/home/myreports/:id"
            exact
            render={(props) => <TaskInfo  {...props} user = {currentUser} />}
          />

          <Route
            path="/about"
            exact
            component={About}
          />

          <Route
            path="/home/myreports"
            exact
            render={(props) => <Table {...props} addItem={myReports} />}
          />


        </div>
      </div>

    </Router>

  );
};

export default Home;
