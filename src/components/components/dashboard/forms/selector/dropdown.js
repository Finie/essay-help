import React,{useState} from 'react'


function Dropdown({label,selection}){

    const [selected, setSelected] = useState("")
    const handleSelect = e => {
        setSelected(e.target.value)
      }


    return(
        <div className="input-field">
        <label htmlFor="paper">{label}</label>

        {selection.map((item)=>{<div> <h1>{item.value}</h1></div>})}

        <select name="paper" id="paper" onChange={handleSelect}>
            
          <option value="Select One">Select One</option>
          <option value="Admission Essay">Admission Essay</option>
          <option value="Article Review">Article Review</option>
          <option value="Business Plan">Business Plan</option>
          <option value="Creative Writing">Creative Writing</option>
          <option value="Research Paper">Research Paper</option>
        </select>
      </div>
    )
}
export default Dropdown;