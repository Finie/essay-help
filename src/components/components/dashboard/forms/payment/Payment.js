import React, { useState } from "react";
import { RiPaypalFill, RiBankLine } from "react-icons/all";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

import "./Payment.css";
import "react-credit-cards/es/styles-compiled.css";
import Button from "../../../Button/EssayButton";
import useLoader from "../../../../hooks/useLoader";

const Payment = ({ prev, pay, Price, Topic }) => {
  const [radio, setRadio] = useState("Paypal");
  const [Loading, isLoading, hideLoading] = useLoader()

  const payment = () => {
    pay(radio);
  };

  const onChecked = (e) => {
    setRadio(e.target.value);
  };

  const handleCardToken = async (token, addresses) => {
    const product = {
      name: Topic,
      price: Price,
    };
    isLoading();
    const response = await axios.post("http://localhost:5000/api/payment/card-checkout", {token, product});    
    console.log(response);
    hideLoading();
  };

  return (
    <div className="payment-contaier">
      {Loading}
      <div className="radio-button-radio">
        <div className="radio-item">
          <label>
            <input
              type="radio"
              value="Paypal"
              checked={radio === "Paypal" ? true : false}
              onChange={onChecked}
            />
            PayPal
          </label>
        </div>

        <div className="radio-item">
          <label>
            <input
              type="radio"
              value="Card"
              checked={radio === "Card" ? true : false}
              onChange={onChecked}
            />
            Cards
          </label>
        </div>

        <div className="radio-item">
          <label>
            <input
              type="radio"
              value="Cash-app"
              checked={radio === "Cash-app" ? true : false}
              onChange={onChecked}
            />
            Cash App
          </label>
        </div>

        <div className="radio-item">
          <label>
            <input
              type="radio"
              value="Bank"
              checked={radio === "Bank" ? true : false}
              onChange={onChecked}
            />
            Bank
          </label>
        </div>

        <div className="payment-description">
          <header>{`Complete your checkout with ${radio} payments`}</header>
        </div>
      </div>

      <div className="cash-app-div">
        {radio === "Cash-app" && (
          <div className="cash-app">
            <h1>Cash App</h1>
          </div>
        )}

        {radio === "Bank" && (
          <div className="bank-app">
            <RiBankLine style={{ width: "3rem", height: "3rem" }} />
            <h3>Bank</h3>
          </div>
        )}

        {radio === "Paypal" && (
          <div className="bank-app">
            <RiPaypalFill
              style={{ width: "3rem", height: "3rem", color: "#0070BA" }}
            />
            <h3 style={{ color: "#0070BA" }}>Paypal</h3>
          </div>
        )}

        {radio === "Card" && (
          <div className="bank-app">
            <StripeCheckout
              stripeKey={
                "pk_test_51IFR4XHKFiqVIwkfeSmfJa2ynEzbbGccHNc6f2OoYu1vv4eLLXvLEbcoeEARBe9HdjoPwA6TXbKbU8IIsjRkhr1d00ilbMpS64"
              }
              token={handleCardToken}
              amount={20 * 100}
            />
          </div>
        )}
      </div>

      <div className="payment-buttons">
        <div className="left-button">
          <Button onClick={prev}>Previous</Button>
        </div>
        <div className="space-between" />
        <div className="right-button">
          <Button onClick={payment}>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
