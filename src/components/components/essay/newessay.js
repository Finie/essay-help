import React, { useState } from "react";
import "./newessay.css";
import Button from "../Button/Button";
import { pricingData } from "../../../assets/data/pricingData";

export default function NewEssay() {
  const [pages, setPages] = useState(1);
  // const [data, setData] = useState([])

  const [selected, setSelected] = useState("");
  const [deadline, seDeadline] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState(8.99);
  const [sellPrice, setSellPrice] = useState("");
  const [datus, setDatus] = useState([
    {
      deadline: "14 Days",
      price: 8.99,
    },
    {
      deadline: "7 Days",
      price: 9.01,
    },
    {
      deadline: "5 Days",
      price: 10.01,
    },
    {
      deadline: "3 Days",
      price: 11.01,
    },
    {
      deadline: "2 Days",
      price: 12.01,
    },
    {
      deadline: "24 Hours",
      price: 15.01,
    },
    {
      deadline: "8 Hours",
      price: 16.01,
    },
    {
      deadline: "2 -6 Hours",
      price: 20.01,
    },
  ]);

  const handleSelect = (e) => {
    pricingData.data.filter((item) => {
      if (item.level === e.target.value) {
        setPrice(item.data[0].price);
        setDatus(item.data);
      }
      
    });
  };

  const handleSelectedDate = (e) => {
    datus.filter((item) =>
      item.deadline === e.target.value ? setPrice(item.price) : null
    );
    console.log(price);
    setSellPrice(e.target.value);
  };

  const handleSubmit = (pages, selected, email) => {
    console.log(pages + " " + selected + " " + email);
  };

  return (
    <div style={{ marginTop: "45px" }}>
      <form className="essay-form" id="essay-form">
        <h1>Give Your Grades A Boost</h1>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="input-field">
          <label htmlFor="paper">Level : </label>
          <select name="paper" id="paper" onChange={handleSelect}>
            {pricingData.data.map((datus) => {
              return <option value={datus.level}>{datus.level}</option>;
            })}
          </select>
        </div>

        <div className="page-container">
          <div className="label">
            <label htmlFor="pages">Pages</label>
          </div>

          <div className="buttons-div">
            <div className="buttons">
              <button
                className="button"
                type="button"
                disabled={pages <= 1}
                onClick={() => {
                  if (pages > 1) {
                    let page = pages;
                    setPages((page -= 1));
                  }
                }}
              >
                -
              </button>

              <div className="counter-holder">
                <p>{pages}</p>
              </div>

              <button
                className="button"
                type="button"
                onClick={() => {
                  // check that pages is >= 1
                  let page = pages;
                  if (page >= 1) {
                    setPages((page += 1));
                  }
                }}
              >
                +
              </button>
            </div>
            <div className="words-display">
              <p>{pages * 275} words</p>
            </div>
          </div>
        </div>

        <div className="input-field">
          <label htmlFor="paper">Deadline : </label>
          <select name="paper" id="paper" onChange={handleSelectedDate}>
            {datus.map((data) => {
              return <option value={data.deadline}>{data.deadline}</option>;
            })}
          </select>
        </div>

        <h1
          style={{
            textAlign: "left",
            color: "black",
            marginLeft: "2rem",
            fontWeight: "bold",
          }}
        >{`$${price * pages}`}</h1>
        <div className="input-field">
          <label htmlFor="button"></label>
          <Button onClick={handleSubmit(pages, deadline, selected, email)}>
            Continue &gt; &gt;
          </Button>
        </div>
      </form>
    </div>
  );
}
