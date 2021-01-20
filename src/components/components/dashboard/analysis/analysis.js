import React from "react";
import Iconcomp from "../../icons/iconcomp";

import "./analysis.css";

function Analysis() {
  return (
    <div className="analysis-container">
      <div className="analysis-wraper">
        <div className="analysis-top">
          <header>Current users index</header>
        </div>

        <div className="analysis-middle">
            <div className="icon-div">
            <Iconcomp/>
            <div className="main-text">
                <h1>150K</h1>
            </div>
            </div>
      
        </div>

        <div className="analysis-bottom">
          <header>Analysis: Growth by 56%</header>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
