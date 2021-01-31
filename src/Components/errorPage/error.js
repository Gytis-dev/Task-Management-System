import React from "react";
import "../errorPage/error.scss";
import "../../global-style/position.scss";
import "../../global-style/font.scss";
import "../../global-style/colors.scss";

const Error = () => {
  return (
    <div className="g-center main-error">
      <div className="main-error-position">
        <div className=" main-error-text-header">
          <span className="white-light">4</span>
          <span className="red-light">0</span>
          <span className="white-light">4</span>
        </div>
        <div  className="main-error-text-name white-light">ERROR</div>
        <div className="main-error-text-descripstion white-light" >Sorry,we couldn't find the page yuo're looking for</div>
      </div>
    </div>
  );
};
export default Error;
