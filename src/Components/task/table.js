import React, {} from "react";
import Task from "../../Components/task/task";
import "../task/task-style.scss";
import "../../global-style/postion.scss";
import "../../global-style/font.scss";

const Table = (props) => {


  return (
    <div>
      <div className = "head">Dashboard</div>
    <div className="table-main">
      <div className="table-main-header g-left font-normal-font">
        <div className=" g-center">ID</div>
        <div>Name</div>
        <div>Reporter</div>
        <div>Priority</div>
        <div>Deadline</div>
        <div>Status</div>
      </div>
      <div className="table-main-body">
        <Task property={props.addItem} />
      </div>
      <div className="table-main-footer "></div>
    </div>
    </div>
    
  );
};
export default Table;
