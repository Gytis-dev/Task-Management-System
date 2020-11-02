import React, { useEffect, Component, useState } from "react";

const TaskInfo = (props) => {
  let {
    id,
    name,
    reporter,
    priority,
    date,
    status,
    comment,
  } = props.location.state.from;

  const [state, setState] = useState({
    id: id,
    name: name,
    reporter: reporter,
    priority: priority,
    status: status,
    comment: comment,
  });

  let changeStatus = () => {
    alert("Mark this task as complete? Press Yes");
    setState({ status: "Approved" });
    props.change(state);
  };
  return (
    <div className="table-main-header g-center font-normal-font">
      <button onClick={() => props.history.push("/home")}>BACK</button>
      <li>{id}</li>
      <li>{name}</li>
      <li>{reporter}</li>
      <li>{priority}</li>
      <li>{date}</li>
      <li>{state.status}</li>
      <li>{comment}</li>
      <button onClick={changeStatus}>Change status</button>
    </div>
  );
};
export default TaskInfo;
