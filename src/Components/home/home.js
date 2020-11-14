import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Link, useHistory, Redirect } from "react-router-dom";
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
      reporter: "Gytis",
      priority: "low",
      date: "2020-10-06",
      status: "Submitted",
      comment: "comment 1",
      koment: []
    },
    {
      id: 2,
      name: "Extract report",
      reporter: "Gytis",
      priority: "High",
      date: "2020-10-04",
      status: "Submitted",
      comment: "comment 2",
      koment: []
    },
    {
      id: 3,
      name: "Change system",
      reporter: "Modestas",
      priority: "Middle",
      date: "2020-10-02",
      status: "Submitted",
      comment: "comment 3",
      koment: []
    },
  ]);

  // My reports filtravimas kai vyksta pirmasis render
  const [myReports, setMyReports] = useState();

  useEffect(() => {

    let localStorageItems = localStorage.getItem("itemData");
    localStorageItems = JSON.parse(localStorageItems);

    if (localStorageItems) {
      let reports = localStorageItems.filter(taskItem => taskItem.reporter === useris);
      setMyReports(reports);
    }
    else {
      let taskReports = task.filter(item => item.reporter === useris);
      setMyReports(taskReports)
    }

  }, []);

  let updateMyReports = () => {
    let update = task.filter(report => report.reporter === useris);
    setMyReports(update);
  }
  // statuso pakeitimas
  let changeStatus = (item) => {
    task.map((taskas) => {
      if (taskas.id === item.id) {
        taskas.status = "Approved";
        localStorage.setItem("itemData", JSON.stringify(task));
      }
    });
    updateMyReports();
  };

  let submit = (newItem) => {
    newItem.id = task.length + 1;
    newItem.reporter = useris;
    let date = new Date();
    setTask([...task, newItem]);
    updateMyReports();
  };
  useEffect(() => {
    let itemData = localStorage.getItem("itemData");
    itemData = JSON.parse(itemData);
    itemData ? setTask(itemData) : setTask(task);
  }, []);

  useEffect(() => {
    localStorage.setItem("itemData", JSON.stringify(task));
    updateMyReports();
  }, [task])


  let cmt = (id, value) => {
    task.map(tsk => {
      if (id === tsk.id) {
        tsk.koment.push(value);
        localStorage.setItem("itemData", JSON.stringify(task));
      }
    })
  }



const [searchValue, setSearchValue] = useState([]);
 let performSearch = (value) => {
    task.filter((item) => {
      if (item.name[0] === value[0] && item.name[1] === value[1] && item.name[2] === value[2]){
        setSearchValue([item]);
      }
    })
 }

  return (
    <Router>
      <div className="home">
        <div className="home-grid-one">
          <Navbar name={useris} handleFormSubmit={submit} search = {performSearch}/>
        </div>
        <div className="home-grid-two">
          <Route

            path="/home"
            exact
            render={(props) => <Table {...props} addItem={task} />}
          />
          <Route
            path="/home/myreports"
            exact
            render={(props) => <Table {...props} addItem={myReports} />}
          />
          <Route
            path="/home/myreports/:id"
            exact
            render={(props) => <TaskInfo  {...props} change={changeStatus} comment={cmt} />}
          />
          <Route path = "/home/search"
          exact
          render = {(props) => 
          searchValue ? (<Table {...props} addItem = {searchValue} />) : (
            <Redirect to = "/home"/>
          )
        }
        
        
        
        
        
        />
          
        </div>
      </div>
    </Router>

  );
};

export default Home;
