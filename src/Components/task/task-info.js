import React, { useEffect, Component, useState, useHistory } from "react";


const TaskInfo = (props) => {
  let {
    id,
    name,
    reporter,
    priority,
    date,
    status,
    comment,
    koment
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

  
  const [val, setVal] = useState("");
  let addComment = (e) => {

    if (val){
      props.comment(state.id, val);
      alert("Comment submitted");
      window.location.href = `/home`;
    }
    else {
      alert ("Please enter a valid comment");
    }  
  }

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

      <input type = "text" value = {val} onChange = {(e) => setVal(e.target.value)}/>
      <button onClick = {addComment}>Add comment</button>

      <div className = "commentai">

      {koment.map(k => {
        return  <li key = {k}>{k}</li>
      })}
      </div>



    </div>
  );
};
export default TaskInfo;
