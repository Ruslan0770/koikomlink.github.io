import React from "react";
import "./transfrom.css";
import { Link } from "react-router-dom";

export default function Transform() {
  return (
    <>
      <div className="Transform">
        <div className="text-center all">
          <h4>WANT TO WORK WITH US?</h4>
          <h2>Igniting Digital Transformation, Powering Your Growth!</h2>
          <div className="pedit text-center">
            <p>
              Realize the full potential of your business with KOIKOM –
              Together, we'll shape a digital future that's uniquely yours,
              filled with growth and possibilities.
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
