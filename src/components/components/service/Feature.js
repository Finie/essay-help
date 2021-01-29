import React from "react";

import "./featureItem.css";

const Feature = ({ data }) => (
  <div className="feature-service">
    <div className="image-sfeature-holder">
      <img src={data.image_url} alt={"alterante"} style={{ width: "100%" }} />
    </div>

    <div className="feature-header">
      <header>{data.document_title}</header>
    </div>

    <div className="feature-body">
      <p>{data.document_body}</p>
    </div>
  </div>
);

export default Feature;
