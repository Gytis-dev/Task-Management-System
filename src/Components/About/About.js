import React, { useState } from "react";
import "../About/about.scss";
import pic from "../../img/login/picture.png";

const About = () => {
  return (
    <div className="wrapparent">
      <div className="wrapparent-about g-center">
        <div className="font-sami-big white-light">
          The <span className="red-light">#1</span> software development system used by large
          corporations and medium size entities
        </div>
        {/* <button className="g-btn-actyve ">Get profesional version</button> */}
      </div>
      <div className="g-center">
        <img src={pic} />
      </div>
    </div>
  );
};

export default About;
