import React, { useState } from "react";
import "./newessay.css";
import Button from '../Button/Button'

export default function NewEssay() {
  const [pages, setPages] = useState(1);
  // const [data, setData] = useState([])

  const [selected, setSelected] = useState("")
  const [deadline, seDeadline] = useState("")
  const [email, setEmail] = useState("")
  const handleSelect = e => {
    setSelected(e.target.value)
  }
  const handleSubmit = (pages, selected, email ) => {
    
    console.log(pages+" "+selected+" "+email)
  }


  return (
    <div style={{ marginTop: "45px" }}>
      <form id="essay-form">
        <h1>Give Your Grades A Boost</h1>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={(e) => {
            setEmail(e.target.value)

          }} />
        </div>

        <div className="input-field">
          <label htmlFor="paper">Type of Paper</label>
          <select name="paper" id="paper" onChange={handleSelect}>
            <option value="Select One">Select One</option>
            <option value="Admission Essay">Admission Essay</option>
            <option value="Article Review">Article Review</option>
            <option value="Business Plan">Business Plan</option>
            <option value="Creative Writing">Creative Writing</option>
            <option value="Research Paper">Research Paper</option>
          </select>
        </div>


        <div className="page-container">
          <div className="label">
        <label htmlFor="pages">Pages</label>
          </div>

          <div className="buttons-div">
            <div className="buttons">

            <button type="button" disabled={pages <= 1} className="" onClick={() => {
                  if (pages > 1) {
                    let page = pages;
                    setPages((page -= 1));
                  }
                }}>-</button>


              <div className="counter-holder">
                <p>{pages}</p>
              </div>

              <button type="button" className="" onClick={() => {

                   // check that pages is >= 1
                   let page = pages;
                    if (page >= 1) {
                         setPages((page += 1));
                                    }
                        }}>+</button> 


            </div>
            <div className="words-display">
            <p>{pages * 275} words</p>
            </div>
          </div>

        </div>


        <div className="input-field">
          <label htmlFor="email">Deadline</label>
          <input type="date" name="date" id="date" onChange={(e) => seDeadline(e.target.value)} />
        </div>

        <div className="input-field">
          <label htmlFor="button"></label>
          <Button onClick={handleSubmit(pages,deadline,selected,email)} >Continue &gt; &gt;</Button>
        </div>
      </form>
    </div>
  );
}
