import React from "react";
import "./transfrom.css";
import { Link } from "react-router-dom";

export default function Transform() {
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="Transform"
      >
        <div className="text-center all">
          <h4>WANT TO WORK WITH US?</h4>
          <h2>Digitally transform and grow your business!</h2>
          <div className="pedit text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur. Elementum convallis
              interdum sem <br /> vestibulum fringilla venenatis est. Malesuada
              mauris lacus sit suspendisse <br /> adipiscing vitae augue.
            </p>
          </div>
          <div className="buttonedit">
            <Link to="/">
              <button className="button">Call Now</button>
            </Link>
            <Link to="./contactus">
              <button className="button2">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
