import React from "react";
import "./chooseus.css";
import choose from "../../assets/img/choose.svg";

export default function Chooseus() {
  return (
    <>
      <div className="Choose">
        <div className="container">
          <div className="row all">
            <div className="col-lg-6 col-md-4">
              <div className="box">
                <div
                  // data-aos="flip-left"
                  // data-aos-easing="ease-out-cubic"
                  // data-aos-duration="2000"
                  className="left"
                >
                  <img src={choose} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="box">
                <div className="right">
                  <h4>WHY CHOOSE US?</h4>
                  <h2>
                    Innovative, Tailored IT Solutions for Business Success.
                  </h2>
                  <p>
                    At KOIKOM, we stand out as a leader in IT solutions for
                    several compelling reasons:
                  </p>
                  <div className="row all2">
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button> Innovative Solutions</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Tailored Services</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Expert Team</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Client-Centric Approach</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Proven Track Record</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Responsive Support</button>
                      </div>
                    </div>
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
