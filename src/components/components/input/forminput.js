import React from 'react'



import './forminput'


function Forminput({type,name,placeholder}){


    const handleChange = (text) => {
        console.log(text)
    }

return(
    <div className="input-field">
    <label htmlFor="email">{name}</label>
    <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleChange} />
  </div>
);

}


export default Forminput;
