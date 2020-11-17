import React, {} from "react";
import TaskComponent from "../task/task-component";

const Task = (props) => {

if (props.property.length > 0){
  return props.property.map((item) => {
    return <TaskComponent prop={item} key={item.id + 1} />;
  });
}
else {
  return (
    <div>
      <h1 style = {{color:"white", textAlign:"center"}}>Sorry, no tasks found according to your search criteria</h1>
    </div>
  );
}

};

export default Task;
