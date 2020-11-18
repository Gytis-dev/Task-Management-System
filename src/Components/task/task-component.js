import React from "react";
import { Link } from "react-router-dom";
import "../task/task-style.scss";
import "../../global-style/postion.scss";
import "../../global-style/font.scss";

const TaskComponent = (props) => {
  let buttonApproved = {
    background: "transparent",
    border: "2px solid #03c03c",
    textAlign: "center",
    borderRadius: "20px",
    padding: "5px",
    color: "white",
  };

  let buttonStyleRegular = {
    background: "transparent",
    border: "2px solid #FFC72C",
    textAlign: "center",
    borderRadius: "20px",
    padding: "5px",
    color: "white",
  };

  return (
    <Link
      to={{
        pathname: `/home/myreports/${props.prop.name}`,
        state: {
          from: props.prop,
        },
      }}
    >
      <div className="table-main-body-items font-small  g-left">
        <div className=" g-center">{props.prop.id}</div>
        <div>{props.prop.name}</div>
        <div>{props.prop.reporter}</div>
        <div>{props.prop.priority}</div>
        <div>{props.prop.date}</div>
        <div>
          <div
            className="table-main-body-items-btn"
            style={
              props.prop.status == "Approved"
                ? buttonApproved
                : buttonStyleRegular
            }>
            {" "}
            {props.prop.status}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TaskComponent;
