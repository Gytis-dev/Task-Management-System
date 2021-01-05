import React from "react";
import { Link } from "react-router-dom";
import "../task/task-style.scss";
import "../../global-style/postion.scss";
import "../../global-style/buttons.scss";

import "../../global-style/font.scss";
import {
  faLongArrowAltUp,
  faLongArrowAltDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TaskComponent = (props) => {

  let checkStyle = () => {
    switch (props.prop.status) {
      case "Approved":
        return {
          background: "#085f63",
          textAlign: "center",
          borderRadius: "20px",
          padding: "7px",
          color: "white",
          boxShadow: "8px 6px 15px -7px rgba(0,0,0,0.7)"
        }
        break;
      case "Submitted":
        return {
          background: "#071e3d",
          textAlign: "center",
          borderRadius: "20px",
          padding: "7px",
          color: "white",
          boxShadow: "8px 6px 15px -7px rgba(0,0,0,0.7)"
        }
        break;
      case "Verification":
        return {
          background: "#278ea5",
          textAlign: "center",
          borderRadius: "20px",
          padding: "7px",
          color: "white",
          boxShadow: "8px 6px 15px -7px rgba(0,0,0,0.7)"
        }
      case "Rejected":
        return {
          background: "#fe4066",
          textAlign: "center",
          borderRadius: "20px",
          padding: "7px",
          color: "white",
          boxShadow: "8px 6px 15px -7px rgba(0,0,0,0.7)"
        }
        break;
      case "Waiting answers":
        return {
          background: "#5d5d5a",
          textAlign: "center",
          borderRadius: "20px",
          padding: "7px",
          color: "white",
          boxShadow: "8px 6px 15px -7px rgba(0,0,0,0.7)"
        }
        break;
    }
  }

  let arrowUp = {
    marginLeft: "5px",
    fontWeight: "bold",
    color: "#03c03c",
    fontSize: "23px",
  }
  let arrowDown = {
    marginLeft: "5px",
    fontWeight: "bold",
    color: "red",
    fontSize: "23px",
  }

  return (
    <Link
      to={{
        pathname: `/home/myreports/${props.prop.id}`,
        state: {
          from: props.prop,
        },
      }}
    >
      <div className="table-main-body-items font-small  g-left">
        <div className=" g-center">{props.prop.number}</div>
        <div>{props.prop.name}</div>
        <div>{props.prop.reporter}</div>

        <div className="tooltip" >{props.prop.priority}
          <FontAwesomeIcon
            icon={props.prop.priority === "Low" || props.prop.priority === "Middle" ? faLongArrowAltUp : faLongArrowAltDown}
            style={props.prop.priority === "Low" || props.prop.priority === "Middle" ? arrowUp : arrowDown}
          />
          <span className="tooltiptext"> {props.prop.priority === "Low" || props.prop.priority === "Middle" ? 'Need to do' : 'Important need to do '}</span>

        </div>

        <div>{props.prop.date}</div>
        <div>
          <div
            className="table-main-body-items-btn"
            style={checkStyle()}
          >
            {" "}
            {props.prop.status}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TaskComponent;
