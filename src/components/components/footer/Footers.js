import React from "react";
import {
  SiVisa,
  SiMastercard,
  CgPaypal,
  MdPhone,
  IoIosMail,
  RiBankLine,
  BsFillHeartFill,
} from "react-icons/all";

import { Link } from 'react-router-dom'

import "./footeritem.css";

const Footers = () => {
  const current_year = new Date().getFullYear();
  return (
    <div className="footer-section">
      <div className="footer-left">
        <div className="contact-info">
          <div className="contact-ho">
            <h3>Contact</h3>
          </div>
          <div className="contact-item">
            <IoIosMail
              style={{
                width: "2rem",
                height: "2rem",
                marginRight: 6,
                marginTop: 8,
              }}
            />
            <p>info@legalessaywriters.com</p>
          </div>
          <div className="contact-item">
            <MdPhone
              style={{
                width: "2rem",
                height: "2rem",
                marginRight: 6,
                marginTop: 8,
              }}
            />
            <p>+1(906)-256-7650</p>
          </div>
        </div>

        <div className="payment-methods">
          <div className="payment-ho">
            <h3>payment methods</h3>
          </div>
          <div className="payment-icons">
            <RiBankLine style={{ width: "6rem", height: "3rem" }} />
            <CgPaypal style={{ width: "6rem", height: "3rem" }} />
            <SiVisa style={{ width: "6rem", height: "3rem" }} />
            <SiMastercard style={{ width: "6rem", height: "3rem" }} />
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="navigation">
          <ul className="navigations">
            <li><Link style={{ textDecoration: 'none',color:'white' }} to={"/"}>Home</Link></li>
            <li><Link style={{ textDecoration: 'none',color:'white'  }} to={"/howitworks"}>How it works</Link></li>
            <li><Link style={{ textDecoration: 'none',color:'white'  }} to={"/pricing"}>Pricing</Link></li>
            <li><Link style={{ textDecoration: 'none',color:'white'  }} to={"/reviews"}>Reviews</Link></li>
          </ul>
        </div>

        <div className="navigation-terms">
          <ul className="navigations-terms">
            <li>
              <Link style={{ textDecoration: 'none',color:'white' }}>Terms & Conditions</Link>
            </li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Revision Policy</li>
          </ul>
        </div>

        <div className="rights-reserved">
          <p>
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
            2019 - {current_year}
          </p>
          <p>
            Legal<span style={{ color: " #F4D140" }}>Essay</span>Writers
          </p>
          <p>all rights reserved</p>
          <p>
            <span>
              Built with{" "}
              <BsFillHeartFill style={{ color: "red", marginBottom: -3 }} /> by{" "}
              <a
                rel="noreferrer"
                target="_blank"
                style={{ color: "white" }}
                href="https://phenius-muthomi.web.app/"
              >
                Fin
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footers;
