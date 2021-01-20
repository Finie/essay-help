import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Forminput from "../../../components/input/forminput";

import "./login.css";

function Login() {
  
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <div className="login-container">
      <div data-aos="zoom-in">
        <div className="input-form-container">
          <header>Login to Account</header>
          <Forminput
            type="email"
            placeholder="Username or email address"
            name="email"
          />
          <Forminput type="password" placeholder="password" name="password" />
          <div className="button-div">
            <Link
              to={"/forgot"}
              style={{ marginRight: "1rem", textDecoration: "none" }}
            >
              forgot password ?
            </Link>
            <Link
              to={"/register"}
              style={{ marginRight: "1rem", textDecoration: "none" }}
            >
              I dint have an account sign up
            </Link>
            <Button className="button-item">Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
