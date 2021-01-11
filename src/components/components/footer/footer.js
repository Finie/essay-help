import React from 'react'
import {SiVisa, SiMastercard,RiPaypalLine,MdPhone,IoIosMail,RiBankLine,BsFillHeartFill} from 'react-icons/all'
import './footer.css'


function Footer(){
    const current_year = new Date().getFullYear();
return(
    <div className="footer-container">
        <div className="footer-left">

            <div className="contact-info">
                <h3>Contact</h3>
                <div className="contact-item"><MdPhone style={{width:"2rem", height:"2rem", marginRight:6}}/><p>+1212345756</p></div>
                <div className="contact-item"><IoIosMail style={{width:"4em", height:"2rem",marginRight:3}}/><p>info@essayhelp.com</p></div>
            </div>

            <div className="payment-methods">
                <h3>payment methods</h3>
                <div className="payment-icons">
                <SiVisa style={{width:"6rem", height:"3rem"}} />
                <SiMastercard style={{width:"6rem", height:"3rem"}}/>
                <RiPaypalLine style={{width:"6rem", height:"3rem"}}/>
                <RiBankLine style={{width:"6rem", height:"3rem"}}/>
                </div>
            </div>

        </div>
        <div className="footer-right">

            <div className="navigation">
                <ul className="navigations">
                    <li>Home</li>
                    <li>How it works</li>
                    <li>Pricing</li>
                    <li>Order</li>
                </ul>
            </div>

            <div className="navigation">
                <ul className="navigations">
                    <li>Terms & Conditions</li>
                    <li>Refund Policy</li>
                    <li>Privacy Policy</li>
                    <li>Revision Policy</li>
                </ul>
            </div>


            <div className="rights-reserved">
                <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />{current_year}</p>
            <p>Essay<span style={{color:' #F4D140'}}>help</span></p>
             <p>all rights reserved</p>
            <p><span>Built with <BsFillHeartFill style={{color:'red',marginBottom:-3}}/> by <a rel="noreferrer" target="_blank" style={{color:"white"}} href="https://phenius-muthomi.web.app/">Fin</a></span></p>
            </div>

        </div>
     </div>
);

}


export default Footer;