import React, { useState, useEffect} from "react";
import Task from "../Components/Task";

const Table = (props) => {
    return (
        <table className="table-wrap">
            <thead>
                <tr className="task-header">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Reporter</th>
                    <th>Priority</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>View</th>
                </tr>
            </thead>
            <Task property = {props.addItem}/>
        </table>
    );
}
export default Table;