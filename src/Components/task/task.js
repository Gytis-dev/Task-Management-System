import React, { useState, useEffect } from "react";
import TaskComponent from "../task/task-component";
import { Link } from "react-router-dom";


const Task = (props) => {

    return props.property.map((item) => {
        return <TaskComponent prop={item} key={item.id + 1} />
    });

}

export default Task;