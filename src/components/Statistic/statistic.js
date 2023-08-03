import React from "react";
import "./statistic.css";

export default function Statistic() {
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="Statistic"
      >
        <div className="row all">
          <div className="col-lg-2 col-md-3">
            <div className="box">
              <h3>27+</h3>
              <h5>Years Helping Business</h5>
            </div>
          </div>
          <div className="col-lg-2 col-md-3">
            <div className="box">
              <h3>500+</h3>
              <h5>Employees</h5>
            </div>
          </div>
          <div className="col-lg-2 col-md-3">
            <div className="box">
              <h3>30M</h3>
              <h5>Completed Projects</h5>
            </div>
          </div>
          <div className="col-lg-2 col-md-3">
            <div className="box">
              <h3>90K+</h3>
              <h5>5 Star Rating</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
