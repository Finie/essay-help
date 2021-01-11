import React from 'react'


import './howitem.css'

function howitem({data}){

    let alignmentClass = "howitem-container"

    if (data.alignment === "center") {
        alignmentClass="howitem-container-center"
    }

    return(
        <div className={alignmentClass}>
            <header>{data.title}</header>
            <section>{data.body}</section>
        </div>
    );
}


export default howitem;