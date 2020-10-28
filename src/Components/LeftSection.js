import React from "react";
import "../Components/leftSection.css";

const LeftSection = () => {
    return (
        <div className="left-section">
            {/* <h3>Dashboard</h3>
            <h3>Create and track issues</h3> */}
            <ul>
                <li>Open Issues</li>
                <li>Approved Issues</li>
                <li>Rejected Issues</li>
                <li>High-priority Issues</li> 
            </ul>
        </div>
    );
}

export default LeftSection;