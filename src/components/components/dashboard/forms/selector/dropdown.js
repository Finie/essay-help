import React, { useState } from "react";


import './drop.css'

function Dropdown({ label, selection }) {
  const [selected, setSelected] = useState("");
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="input-field">
      <label htmlFor="paper">{label}</label>
      <select name="paper" id="paper" onChange={handleSelect}>

      {selection.map((item) => {
        return (
            <option value={item.value}>{item.type_essay}</option>
            );
          })}
          </select>
    </div>
  );
}
export default Dropdown;
