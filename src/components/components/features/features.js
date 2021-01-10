import React from 'react'

import './features.css'

function Features({data}){
    return(
        <div className="feature-container">
            <div>
            <img src={data.image_url} alt={data.document_id}  className="image-item"/>
            </div>
             
            <div className="feature-description">
                <header>{data.document_title}</header>
                <section>{data.document_body}</section>
            </div>
        </div>
    );
}

export default Features;