import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


import './howitem.css'

function Howitem({data}){

    useEffect(() => {
        AOS.init({ duration: 700});
    }, [])
    

    let alignmentClass = "howitem-container"

    if (data.alignment === "center") {
        alignmentClass="howitem-container-center"
    }

    return(
        <div className={alignmentClass}>
            <header data-aos="fade-up">{data.title}</header>
            <section data-aos="fade-up">{data.body}</section>
        </div>
    );
}


export default Howitem;