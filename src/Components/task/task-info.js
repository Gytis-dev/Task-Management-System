import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import API from "../Axios/config";



const TaskInfo = (props) => {

  const [state, setState] = useState({});
  const [komentaras, setKomentaras] = useState([]);
  const [val, setVal] = useState("");
  const [commentStyle, setCommentStyle] = useState(false);

  useEffect(() => {
    API.get(`/todoList/${props.location.state.from.id}.json`)
      .then(res => {
        setState(res.data);
        let arr = [];
        let commentItems;
        commentItems = res.data.komentaras;
        for (let key in commentItems) {
          arr.push(commentItems[key])
        }
        let items = arr.map(cmt => cmt);
        setKomentaras(items);
      })
      .catch(err => console.log(err))
  }, [])

  let changeStatus = (e) => {

    if (state.status == "Approved" || state.status == "Rejected") {
      return 0;
    }
    else {
      API.patch(`/todoList/${props.location.state.from.id}.json`, {
        status: e.target.innerText
      })
        .then(res => {
          setState({ ...state, status: res.data.status })
        })
        .catch(err => console.log(err))
    }
  };

  let addComment = () => {
    if (state.status == "Approved" || state.status == "Rejected") {
      alert("This issue has been already resolved")
      return 0;
    }
    else {
      let comment = {
        commentator: props.user,
        val: val
      }

      API.post(`/todoList/${props.location.state.from.id}/komentaras.json`, comment)
        .then(res => {
          console.log("Comment succesfully posted!");
          setKomentaras([...komentaras, comment])
          setVal("");
        })
        .catch(err => console.log(err));
    }
  }
  let checkStyle = () => {

    switch (state.status) {
      case "Approved":
        return { color: "rgb(8, 95, 99)" }
        break;
      case "Submitted":
        return { color: "rgb(7, 30, 61)" }
        break;
      case "Rejected":
        return { color: "rgb(254, 64, 102)" }
        break;
      case "Waiting answers":
        return { color: "rgb(93, 93, 90)" }
        break;
      case "Verification":
        return { color: "rgb(39, 142, 165)" }
        break;
    }
  }


  return (
    <div className="task-info">

      <div className="task-info-left-menu">
        <div
          className="task-info-back-button g-left font-normal-font"
          onClick={() => props.history.push("/home")}>
          Back
      </div>
        <div className="font-normal-big g-left task-info-title-name">{" "}</div>
        <div className="task-info-body-grid">
          <div>
            <div className="font-normal-font g-left task-info-body-grid-title ">
              <h4 style={{ margin: "0" }}>Reporter:{" "}</h4>
              <div className="task-info-body-grid-descripsion">
                {state.reporter}
              </div>
            </div>
            <div className="font-normal-font g-left task-info-body-grid-title ">
              <h4 style={{ margin: "0" }}>Task priority:{" "}</h4>
              <div className="task-info-body-grid-descripsion">
                {state.priority}
              </div>
            </div>
          </div>
          <div>
            <div className="font-normal-font g-left task-info-body-grid-title ">
              <h4 style={{ margin: "0" }}>Task deadline:{" "}</h4>
              <div className="task-info-body-grid-descripsion">
                {state.date}
              </div>
            </div>
            <div className=" g-left">
              <div
                className="font-normal-font task-info-body-grid-title-status"

              >
                <div className="btn-parent">
                  <h4 style={{ margin: "0" }}>Task status:{" "}<span style={checkStyle()}>{state.status}</span></h4>
                  <button className="btn-btn" onClick={(e) => changeStatus(e)}>Verification</button>
                  <button className="btn-btn" onClick={(e) => changeStatus(e)}>Waiting answers</button>
                  <button className="btn-btn" onClick={(e) => changeStatus(e)}>Approved</button>
                  <button className="btn-btn" onClick={(e) => changeStatus(e)}>Rejected</button>
                </div>
                <div className="task-info-body-grid-descripsion">
                </div>
                <div className="task-info-body-grid-title-status-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-normal-font g-left task-info-body-grid-title ">
              <h4 style={{ margin: "0" }}>Task description:{" "}</h4>
              <div className="task-info-body-grid-descripsion">
                {state.comment}
              </div>
            </div>
            <div className="font-normal-font g-left task-info-body-grid-title ">
              <h4 style={{ margin: "0" }}>Task unique number:{" "}</h4>
              <div className="task-info-body-grid-descripsion ">
                {props.location.state.from.number}
              </div>
            </div>
          </div>
        </div>
        <hr className="task-info-hr" />
        <div className="font-normal-big g-left task-info-title-comment ">
          Comment
          </div>
        <div className="g-left task-info-comment">
          <textarea
            disabled={state.status === "Approved" || state.status === "Rejected" || state.showCart === true && true}
            className="task-info-comment-style"
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <div className="g-right task-info-button-postion">
          <div
            className="g-btn-comment font-normal-font g-center"
            onClick={addComment}
            disabled={state.status === "Approved" && true}>
            Add comment
          </div>
        </div>
      </div>
      <div className="task-info-right-menu">
        <div className="g-left font-normal-font task-info-comment-text">
          <h2 style={{ color: "white" }}>Comment's ({komentaras.length})</h2>
          {komentaras.map((comment) => {
            return <li className="parent" key={state.number += 1}>
              <h4 className="comment-style" >{comment.commentator}</h4> <small>Added a comment</small>
              <div className="commentas">{comment.val}</div>
            </li>
          })}
        </div>
      </div>
    </div>
  );
};
export default TaskInfo;
