import React from "react";
import Feature from "../service/Feature";

import "./service.css";

const Service = ({ data }) => (
  <div className="service-holder">
    <div className="service-features">
      {data.map((datus) => {
        return <Feature data={datus} />;
      })}
    </div>
  </div>
);

export default Service;
