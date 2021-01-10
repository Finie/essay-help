import React from 'react'

import './thirdcomponent.css'

function Thirdcomponent({children}){

    return(
        <div className="third-container">
            {children}       
        </div>
    )
}


export default Thirdcomponent;