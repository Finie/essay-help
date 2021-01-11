import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'


import './Howitworks.css'
import HowItem from '../../components/howitworkscomp/howitem'
import {howLeftData} from '../../../assets/data/howleft'
import {howRightData} from '../../../assets/data/howRight'
import Iconcomp from '../../components/icons/iconcomp'
import Button from "../../components/whatsapp/whatsappbutton"


function Howitworks(){


return(
    <div className="howitworks-container">
       <div className="header">
       <h1>How Essay<span style={{color:' #F4D140'}}>help</span> it works</h1>
         <Iconcomp iconName={"RiFileInfoLine"} />
       <div className="content-container">
           <div className="container-left">

              {howLeftData.data.map((item)=><HowItem data={item}/>)}

              <Button url={"https://wa.me/254715438186"}><span> <IoLogoWhatsapp  style={{marginBottom:-3, marginRight:4}}/>WhatsApp us by clicking here</span></Button>

           </div>
           <div className="container-right">
               {howRightData.data.map((item)=> {
                   if(item.icon === ""){
                   return (<HowItem data={item}/>)}

                   else{
                       return(
                        <div className="contains-icon">
                        <div className="icon_">
                        <Iconcomp iconName={item.icon} />
                        </div>
                        <div className="info_">
                        <HowItem data={item}/>
                        </div>
                    </div>
                       )
                   
                   }
            


               })}

           </div>
       </div>
       </div>
    </div>
)
}


export default Howitworks;