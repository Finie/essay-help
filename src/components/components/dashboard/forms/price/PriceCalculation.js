import React, { useState } from "react";

import { Formik } from "formik";

import "./PriceCalculation.css";
import Dropdown from "../selector/dropdown";
import { Academic } from "../../../../../assets/data/dropdown";

function PriceCalculation() {
  const [radio, setRadio] = useState("double");
  const [pages, setPages] = useState(1);

  const onAdd = (e) => {
    if (pages > 0) {
      console.log("add clicked");
      setPages(pages + 1);
      return;
    }
  };

  const onSubtract = (e) => {
    if (pages > 1) {
      setPages(pages - 1);
      return;
    }
  };

  const onChecked = (e) => {
    setRadio(e.target.value);
  };

  return (
    <div className="price-container">
      <div className="top-sep">
        <Formik>
          <div className="items_one">

            <div className="drop">
            <Dropdown label="Academic Level" selection={Academic.data} />
            <Dropdown label="Type of Work Level" selection={Academic.data} />
            <Dropdown label="Subject" selection={Academic.data} />

            </div>

            <div className="day-date">
              <div className="days">
                <Dropdown label="Day" selection={Academic.data} />
              </div>
              <div className="time">
                <Dropdown label="time" selection={Academic.data} />
              </div>
            </div>

            <div className="page-division">
              <div className="days">
                Number of pages <button onClick={onSubtract}>-</button>
                <div className="input-pages">
                  <input
                    type="number"
                    value={pages}
                    style={{ width: "50px", textAlign:'center' }}
                  />
                </div>
                <button onClick={onAdd}>+</button>
              </div>

              <div className="radio-button">
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="double"
                      checked={radio === "double" ? true : false}
                      onChange={onChecked}
                    />
                    Double Spaced
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="single"
                      checked={radio === "single" ? true : false}
                      onChange={onChecked}
                    />
                    Single Spaced..
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Formik>
      </div>
    </div>
  );
}

export default PriceCalculation;
