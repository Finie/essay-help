import React, { useState } from "react";
import axios from "axios";

import { Redirect } from "react-router-dom";

import OrderDetails from "../../../components/dashboard/forms/orderinfo/OrderDetails";
import Payment from "../../../components/dashboard/forms/payment/Payment";
import PriceCalculation from "../../../components/dashboard/forms/price/PriceCalculation";
import useLoader from "../../../hooks/useLoader";
import paymentRedirection from "../../../components/dashboard/forms/payment/PaymentRedirection";

import "./orders.css";
import StropeCheckout from "react-stripe-checkout";
import StripeCheckout from "react-stripe-checkout";

function Orders() {
  const [step, setStep] = useState(0);
  const [price, setPrice] = useState(0);
  const [topic, setTopic] = useState("");
  const [success, setSuccess] = useState("");

  const [Loading, isLoading, hideLoading] = useLoader();

  const handleNext = (priceTag) => {
    setStep(step + 1);
    if (price <= 0) {
      setPrice(priceTag);
    }
  };

  const handleTopic = (topicTag) => {
    if (topic !== null) {
      setTopic(topicTag);
    }
  };

  const handlePrev = (e) => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handlePayment = (radio) => {

    if (radio === "Paypal") {
      isLoading();

      const data = {
        name: topic,
        sku: "LegalEssayWritters",
        price: `${price}`,
        quantity: 1,
      };

      axios
        .post("http://localhost:5000/api/payment/paypal", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          window.location.href = response.data.data.redirect;
          setSuccess(response.data.data.redirect);
          // window.location.replace(response.data.data.redirect);
          // <Redirect push to={response.data.data.redirect} />
          console.log(response.data.data.redirect);

          hideLoading();
        })
        .catch((error) => {
          hideLoading();
          console.log("errorCaught: ", error.response);
        });
    }

  };

  return (
    <div className="dash-orders-container">
      {Loading}
      <div className="order-item-holder">
        <h1>
          Hello again guys this this the Account settings section dffjd jdfd
          jdjfdfdf jdj d dd fhfhk djdjd hgfgfgkh gcghgh vkhhv kghfghf
        </h1>
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

        {success && <h1>Redirecting please wait...</h1>}
        {step === 0 && <PriceCalculation next={handleNext} />}
        {step === 1 && (
          <OrderDetails
            next={handleNext}
            handleTopic={handleTopic}
            prev={handlePrev}
          />
        )}
        {step === 2 && <Payment Topic={topic} Price={price} prev={handlePrev} pay={handlePayment} />}


       
      </div>
    </div>
  );
}

export default Orders;
