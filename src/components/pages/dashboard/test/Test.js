import React,{ useState, useEffect} from "react";
import Analysis from "../../../components/dashboard/analysis/analysis";

import "./test.css";

function Test(props) {

    

  console.log("Dashboard in test: "+{props})

  return (
    <div className="test-container">
      <h1>This is a simple text </h1>
    </div>
  );
}

export default Test;
