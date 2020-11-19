import React, {useState} from "react";
import "../About/about.scss";
import pic from "../../img/login/picture.png";


const About = () => {
    return (
        <div className = "wrapparent">

                <div className = "grid_1">
                <div>The <span>#1</span> software development system used by large corporations and medium size entities</div>
                <button className = "btn">Get profesional version</button>
                </div>

                <div className = "grid_2">
                    <img src = {pic}/>
                </div>


                

        </div>
    );
}

export default About;