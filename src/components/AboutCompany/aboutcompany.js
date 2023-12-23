import "./acompany.css";
import React from "react";
import aboutcompany from "../../assets/img/aboutcompany.svg";
import { Link } from "react-router-dom";

export default function Aboutcompany() {
  return (
    <>
      <div className="AboutCompany">
        <div className="container">
          <div className="row all">
            <div className="col-lg-7 col-md-7">
              <div className="box">
                <div
                  // data-aos="fade-up-right"
                  // data-aos-duration="1000"
                  className="left"
                >
                  <h3>ABOUT OUR COMPANY</h3>
                  <h2>Pioneering Technology Solutions with a Personal Touch</h2>
                  <p>
                    Founded on a vision to bring innovative IT solutions to
                    businesses of all sizes, KOIKOM began as a small team of
                    tech enthusiasts with a big dream. Today, we've grown into a
                    leading provider of comprehensive IT services, yet we've
                    maintained our commitment to personalized care and bespoke
                    solutions. Our journey has been fueled by a passion for
                    technology and a dedication to our clients' success.
                  </p>
                  <Link to="./aboutus">
                    <button>Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="box">
                <div
                  // data-aos="fade-up-right"
                  // data-aos-duration="1000"
                  className="right"
                >
                  <div className="imgedit">
                    <img src={aboutcompany} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
