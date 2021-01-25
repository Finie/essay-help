import React from 'react'

import './pricingcomp.css'
function Pricingcomp({data}){

return(
<div  className="pricingcomp-contaoner">
    <div className="pricing-header">
        <h3>{data.level}</h3>
    </div>
    <div className="items-holder">
    <div className="pricing-items">
        <div className="heading">Deadline</div>
        <div className="heading">Pricing</div>
        </div>
        {data.data.map((item)=>
        <div className="content">
        <div className="heading-lite">{item.deadline}</div>
        <div className="heading-lite">{`$${item.price}`}</div>
        </div>    )}

    

    </div>

</div>)

}


export default Pricingcomp;