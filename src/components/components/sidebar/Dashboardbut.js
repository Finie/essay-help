import React from "react";

function Dashboardbut(props) {
  return (
    <button className="toggle-button-dash" onClick={props.click}>
      <div className="toggle-button-dash">
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
      </div>
    </button>
  );
}

export default Dashboardbut;
