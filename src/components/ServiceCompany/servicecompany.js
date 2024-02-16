import React from "react";
import "./scompany.css";
import scompany from "../../assets/img/scompany.png";
import { Link } from "react-router-dom";

export default function ServiceCompany() {
  return (
    <>
      <div
        // data-aos="zoom-out-right"
        // data-aos-easing="linear"
        // data-aos-duration="800"
        className="Service"
      >
        <div className="serviceAll">
          <div className="left">
            <div className="leftItems">
              <div className="h1edit">
                <h1>
                  Premier IT Solutions & Business Services for Transformative
                  Success
                </h1>
              </div>
              <div className="pedit">
                <p>
                  At KOIKOM, we redefine the role of an IT company, focusing on
                  providing bespoke IT solutions and services that boost your
                  business's operational efficiency and competitive standing.
                  Explore how our cutting-edge technology expertise can
                  transform your business.
                </p>
              </div>
              <div className="buttonedit">
                <Link to="./services">
                  <button className="servicebutton">Our Service</button>
                </Link>
                <Link to="./contactus">
                  <button className="contactbutton">Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={scompany} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
