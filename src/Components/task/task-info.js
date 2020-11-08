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
<<<<<<< HEAD
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



=======
    <div className="task-info g-center font-normal-font">
      <div>
        <div
          className="task-info-back-button g-left  font-normal-font"
          onClick={() => props.history.push("/home")}
        >
          Back
        </div>
        <div className="font-sami-big g-left task-info-title "> {name}</div>
        <div className="font-normal-font g-left task-info-title ">
          Reporter: {reporter}
        </div>
        <div className="font-normal-font g-left task-info-title ">
          Priority: {priority}
        </div>
        <div className="font-normal-font g-left task-info-title ">
          Date: {date}
        </div>
        <div className=" g-left">
          <div
            className="font-normal-font  task-info-title-status"
            onClick={changeStatus}>
            <div>Status: {state.status}</div>
            <div className="task-info-title-status-edit">
              <FontAwesomeIcon icon={faEdit} />
            </div>
          </div>
        </div>
        <div className="font-normal-font g-left task-info-title-comment ">
          Comment
        </div>
        <div className="g-left task-info-comment">
          <textarea
            className="task-info-comment-style"
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}/>
          <button className="g-btn-actyve " onClick={addComment}>
            Add comment
          </button>
        </div>
        <div className="g-left task-info-comment-text">
          {koment.map((k) => { return <div key={k}> {k} </div>; })}
        </div>
      </div>
>>>>>>> 6dd314a86a1107ccbb3c4bacb9f29b6e9223295e
    </div>
  );
};
export default TaskInfo;
