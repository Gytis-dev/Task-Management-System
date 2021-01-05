import React, { useState } from "react";
import {Link} from "react-router-dom";
import cover from "../../img/login/coveris.png"

import "../About/about.scss";
import pic from "../../img/login/picture.png";

const About = () => {
  return (
    <div className="wrapparent">
      <div className = "one">
        <div className = "headeris">Welcome to <span>Task Manager</span></div>
        <div className = "headeris2">Start creating tasks.</div>
        <div className = "textas">Build a beautiful, modern site with flexible components built from scratch.</div>
        <div className = "butonai">
          <Link className = "btn1">Create Issue</Link>
          <Link className = "btn2" to = "/home/myreports">View MyReports</Link>
        </div>
      </div>

      <div className = "two">
        <img src = {cover} alt = "s"/>
      </div>
  
    </div>
  );
};

export default About;
