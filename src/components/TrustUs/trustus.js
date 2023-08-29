import React from "react";
import "./trustus.css";
import trust from "../../assets/img/trust.svg";
export default function TrustUs() {
  return (
    <>
      <div className="Trust">
        <div className="container">
          <div className="row all">
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <div
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="left"
                >
                  <h4>WHY TRUST US?</h4>
                  <h2>
                  Achieve digital transformation for business services
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Duis eu et interdum
                    id. Malesuada amet rhoncus non sit. Lectus pellentesque
                    ornare felis in semper sit.
                  </p>
                  <div className="row all2">
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Remote It Assistance</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Solving IT Problems</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Practice IT Management</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>IT Security Services</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Managed IT Service</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Cloud Services</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                  data-aos-duration="1500"
                  className="right"
                >
                  <img src={trust} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
