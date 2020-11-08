import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faThumbsUp } from "@fortawesome/free-solid-svg-icons";


const TaskInfo = (props) => {

  let user = localStorage.getItem("useris");

  let {
    id,
    name,
    reporter,
    priority,
    date,
    status,
    comment,
    koment,
  } = props.location.state.from;

  const [state, setState] = useState({
    id: id,
    name: name,
    reporter: reporter,
    priority: priority,
    status: status,
    comment: comment,
  });

  const [com, setCom] = useState([]);



  let changeStatus = () => {
    if (state.status === "Approved"){
      return;
    }

    alert("Mark this task as complete? Press Yes");
    setState({ status: "Approved" });
    props.change(state);
 
  };

  const [val, setVal] = useState("");
  let addComment = () => {
    if (val) {
      props.comment(state.id, val);
      setCom([koment]);
    } else {
      alert("Please enter a valid comment");
    }
    setVal("");
  };

  useEffect(() => {
    console.log("renderiok");
    console.log(val);
  },[state]);

  return (
    <div className="task-info g-center font-normal-font">
      <div>
        <div
          className="task-info-back-button g-left font-normal-font"
          onClick={() => props.history.push("/home")}
        >
          Back
</div>

  <div className="font-sami-big g-left task-info-title "> {id+" - "}{name}</div>
 
        <div className="font-normal-font g-left task-info-title ">
          Reporter: <small style = {{fontWeight:"lighter", marginLeft:"5px"}}>{reporter}</small>
        </div>
        <div className="font-normal-font g-left task-info-title ">
          Priority: <small style = {{fontWeight:"lighter", marginLeft:"5px"}}>{priority}</small>
        </div>
        <div className="font-normal-font g-left task-info-title ">
          Date: <small style = {{fontWeight:"lighter", marginLeft:"5px"}}>{date}</small>
        </div>
        <div className=" g-left">
          <div
            className="font-normal-font task-info-title-status"
            onClick={changeStatus}>
            <div>Status: <small style = {{fontWeight:"lighter", marginLeft:"5px"}} style ={status === "Submitted" ? {color:"rgb(255, 199, 44)"} : {color:"rgb(3, 192, 60)"}}>{status}</small></div>
            <div className="task-info-title-status-edit">
              <FontAwesomeIcon icon={faEdit} />
            </div>
          </div>
        </div>

        <div className="font-normal-font g-left task-info-title ">
          Description: <small style = {{fontWeight:"lighter", marginLeft:"5px"}}>{comment}</small>
        </div>

        
        <div className="font-normal-font g-left task-info-title-comment ">
          Comment
</div>
        <div className="g-left task-info-comment">
          <textarea
            disabled = {state.status === "Approved" && true}
            className="task-info-comment-style"
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)} />
          <button className="g-btn-actyve " onClick={addComment} disabled = {state.status === "Approved" && true}>
            Add comment
</button>
        </div>
        <div className="g-left task-info-comment-text">
         <h3 style ={{color:"white"}}>Comment's ({koment.length})</h3>
  {koment.map((k) => { return <li key={id+=1}>{k}</li>; })}
        </div>
      </div>
    </div>
  );
};
export default TaskInfo;