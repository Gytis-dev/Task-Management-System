import React, {} from "react";
import TaskComponent from "../task/task-component";
import "../task/task-style.scss";

const Task = (props) => {


if (props.property.length > 0){

  return props.property.map((item) => {
    return <TaskComponent prop={item} key={Math.random()}/>;
  });
}
else {
  return (
    <div className="task-text-not-found">
      <div className="task-text-not-found-position  font-sami-big white-light  ">Sorry, no tasks found according to your search criteria</div>
    </div>
  );
}

};

export default Task;
