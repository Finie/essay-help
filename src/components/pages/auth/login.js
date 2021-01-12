import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button'
import Forminput from '../../components/input/forminput'


import './login.css'

function Login(){

    return(
        <div className="login-container">
            <div className="input-form-container">
                <header>Login to Account</header>
                <Forminput type="email" placeholder="Username or email address"  name ="email"/>
                <Forminput type="password" placeholder="password" name="password" />
                <div className="button-div">
                    <Link to={"/forgot"} style={{marginRight:'1rem'}}>forgot password ?</Link>
                    <Link to={"/register"} style={{marginRight:'1rem'}}>I dint have an account sign up</Link>
                    <Button className="button-item">Login</Button>
                </div>
            </div>

        </div>
    );

}


export default Login;