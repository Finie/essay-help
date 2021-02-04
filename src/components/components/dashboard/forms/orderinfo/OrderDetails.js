import React from "react";

import "./OrderDetails.css";
import { StyleType, Reference } from "../../../../../assets/data/style";
import Dropdown from "../selector/dropdown";
import Button from "../../../Button/EssayButton";

const OrderDetails = (props) => {

  const handleChange = (e) =>{
    if(e.target.name === "topic"){
      props.handleTopic(e.target.value)
    }
  }



  return (
    <div className="order-details-container">
      <div className="input-field">
        <label htmlFor="topic">Topic</label>
        <input type="text" name="topic" placeholder={"Your Topic"}  onChange={handleChange}/>
      </div>

      <Dropdown label="Style" selection={StyleType.data} />

      <div className="input-field">
        <label htmlFor="instructions">Instructions</label>
        <textarea
          type="text"
          name="instructions"
          className="instructions"
          placeholder={"Order Instructions"}
          rows="8"
        ></textarea>
      </div>

      <Dropdown label="References" selection={Reference.data} />

      <div className="input-field">
        <label htmlFor="files">Aditional files</label>
        <input type="file" name="files" placeholder={"additional files"} />
      </div>

      <div className="order-info-buttons">
        <div className="left-button">
          <Button onClick={props.prev}>Previous</Button>
        </div>
        <div className="space-between" />
        <div className="right-button">
          <Button onClick={props.next}>Next step</Button>
        </div>
      </div>



    </div>
  );
};

export default OrderDetails;
