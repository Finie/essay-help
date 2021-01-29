import React, { useState } from "react";
import OrderDetails from "../../../components/dashboard/forms/orderinfo/OrderDetails";
import Payment from "../../../components/dashboard/forms/payment/Payment";
import PriceCalculation from "../../../components/dashboard/forms/price/PriceCalculation";

import "./orders.css";

function Orders() {
  const [step, setStep] = useState(0);

  const handleNext = (e) => {
    setStep(step + 1);
  };

  const handlePrev = (e) => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="dash-orders-container">
      <div className="order-item-holder">
          
      <h1>Hello again guys this this the Account settings section dffjd jdfd  jdjfdfdf jdj d dd fhfhk djdjd hgfgfgkh gcghgh vkhhv kghfghf</h1>
        <div className="steps">
          {step >= 0 && <div className="line-active" />}
          <p className={step >= 0 ? "name-active" : "name"}>
            Price Calculation
          </p>
          <div className={step >= 1 ? "line-active" : "line"} />
          <p className={step >= 1 ? "name-active" : "name"}>Order Details</p>
          <div className={step >= 2 ? "line-active" : "line"} />
          <p className={step >= 2 ? "name-active" : "name"}>Payments</p>
        </div>
        {step === 0 && <PriceCalculation next={handleNext} />}
        {step === 1 && <OrderDetails next={handleNext} prev={handlePrev} />}
        {step === 2 && <Payment prev={handlePrev} />}
      </div>
    </div>
  );
}

export default Orders;
