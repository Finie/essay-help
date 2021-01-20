import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'
import Forminput from '../../../components/input/forminput'


import './login.css'

function Forgot(){
    useEffect(() => {
        AOS.init({ duration: 700});
    }, [])
    
    return(
        <div className="login-container">
             <div  data-aos="zoom-in" > 
            <div className="input-form-container">
                <header>Forgot password</header>
                <Forminput type="email" placeholder="Email: example@domain.com"  name ="email"/>

                <div className="button-div">
                <Link to={"/login"} style={{marginRight:'3rem',textDecoration:'none'}}><BiArrowBack /> back to login</Link>
                    <Button className="button-item">Reset</Button>
                </div>
            </div>
           </div>
        </div>
    );

}


export default Forgot;