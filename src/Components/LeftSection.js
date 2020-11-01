import React from "react";
import "../Components/leftSection.css";

const LeftSection = () => {
    return (
        <div className="left-section">
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