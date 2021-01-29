import React, { useState } from "react";
import { RiPaypalFill, RiBankLine } from "react-icons/all";

import "./Payment.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Button from "../../../Button/EssayButton";

const Payment = ({prev}) => {
  const [radio, setRadio] = useState("Paypal");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [cvc, setCvc] = useState("");

  const onChecked = (e) => {
    setRadio(e.target.value);
  };

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      setCardNumber(value);
    } else if (name === "cvc") {
      setCvc(value);
    } else if (name === "expiry") {
      setExpiry(value);
    } else if (name === "name") {
      setCardName(value);
    }
  };

  return (
    <div className="payment-contaier">
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
            <RiPaypalFill style={{ width: "3rem", height: "3rem", color:"#0070BA" }} />
            <h3 style={{color:"#0070BA"}}>Paypal</h3>
          </div>
        )}
      </div>

      {radio === "Card" && (
        <div className="card-payments">
          <div className="card-layout">
            <div className="card-secrion">
              <Cards
                cvc={cvc}
                expiry={expiry}
                focused={focus}
                name={cardName}
                number={cardNumber}
              />
            </div>

            <div className="card-form-section">
              <form className="form-input">
                <div className="input-field">
                  <input
                    type="tel"
                    name="number"
                    pattern="[\d| ]{16,22}"
                    required
                    className="tele"
                    maxLength={16}
                    placeholder="Card Number"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </div>

                <div className="input-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Card holder Name"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </div>

                <div className="input-field">
                  <input
                    type="tel"
                    name="expiry"
                    maxLength={5}
                    placeholder="Expiry"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </div>

                <div className="input-field">
                  <input
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    maxLength={3}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="payment-buttons">
        <div className="left-button">
          <Button onClick={prev}>Previous</Button>
        </div>
        <div className="space-between" />
        <div className="right-button">
          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
