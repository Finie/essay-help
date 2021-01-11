import React from 'react'

import { AiOutlineFileSearch,RiFileInfoLine,FiEdit,BiSelectMultiple,GiStorkDelivery,GiRead } from 'react-icons/all'
import './iconcomp.css'

function Iconcomp({iconName}){

    let icon = <AiOutlineFileSearch className="icon-item-small"/>;

    if(iconName ==="FiEdit"){icon = <FiEdit className="icon-item-small"/>}
    else if(iconName === "RiFileInfoLine"){ icon = <RiFileInfoLine className="icon-item-small"/>}
    else if(iconName === "BiSelectMultiple"){icon = <BiSelectMultiple className="icon-item-small"/>}
    else if(iconName === "GiStorkDelivery"){icon = <GiStorkDelivery className="icon-item-small"/>}
    else if(iconName === "GiRead"){icon = <GiRead className="icon-item-small"/>}

return(
    <div className="icon-component-small">
        {icon}
    </div>
);
}


export default Iconcomp;