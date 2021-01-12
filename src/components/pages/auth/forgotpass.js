import React from 'react'
import Button from '../../components/Button/Button'
import Forminput from '../../components/input/forminput'


import './login.css'

function Forgot(){

    return(
        <div className="login-container">
            <div className="input-form-container">
                <header>Forgot password</header>
                <Forminput type="email" placeholder="Username or email address"  name ="email"/>

                <div className="button-div">
                    <Button className="button-item">Reset</Button>
                </div>
            </div>

        </div>
    );

}


export default Forgot;