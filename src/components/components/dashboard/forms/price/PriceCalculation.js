import React from "react";

import { Formik } from "formik";

import "./PriceCalculation.css";
import Dropdown from "../selector/dropdown";
import { Academic } from '../../../../../assets/data/dropdown'

function PriceCalculation() {




  return (
    <div>
      <div>
        <Formik>
          <div>
            <Dropdown label="Academic Level" selection={Academic.data} />
            <Dropdown label="Eassy Type" />
            <Dropdown label="Field / Subject" />
          </div>
        </Formik>
      </div>
    </div>
  );
}

export default PriceCalculation;
