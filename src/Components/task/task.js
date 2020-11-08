import React, {} from "react";
import TaskComponent from "../task/task-component";

const Task = (props) => {
  return props.property.map((item) => {
    return <TaskComponent prop={item} key={item.id + 1} />;
  });
};

export default Task;
