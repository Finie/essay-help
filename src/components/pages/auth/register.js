import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button'
import Forminput from '../../components/input/forminput'


import './login.css'

function Register(){

    return(
        <div className="login-container">
            <div className="input-form-container">
                <header>Create Account</header>
                <Forminput type="text" placeholder="Username"  name ="username"/>
                <Forminput type="email" placeholder="Email: example@domain.com"  name ="email"/>
                <Forminput type="password" placeholder="Password" name="password" />
                <Forminput type="password" placeholder="Confirm password" name="confirm" />
                <div className="button-div">
                    <Link  to={"/login"} style={{marginRight:'1rem'}}>I have an account Log in</Link>
                    <Button className="button-item">Sign Up</Button>
                </div>
            </div>

        </div>
    );

}


export default Register;