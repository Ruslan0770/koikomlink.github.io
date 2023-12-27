import React from "react";
import "./trustus.css";
import trust from "../../assets/img/trust.png";
export default function TrustUs() {
  return (
    <>
      <div className="Trust">
        <div className="container">
          <div className="row all">
            <div className="col-lg-6 col-md-7">
              <div className="box">
                <div className="left">
                  <h4>WHY TRUST US?</h4>
                  <h2>Reliable, Secure, and Ethical IT Solutions</h2>
                  <p>
                    Our dedication to secure and ethical IT practices forms the
                    foundation of lasting partnerships built on trust and
                    transparency.
                  </p>
                  <div className="row all2">
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Proven Reliability</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Transparent Communication</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Robust Data Security</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Ethical Practices</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="minibox">
                        <button>Lasting Relationships</button>
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
            <div className="col-lg-5 col-md-5">
              <div className="box">
                <div
                  // data-aos="fade-up"
                  // data-aos-anchor-placement="top-center"
                  // data-aos-duration="1500"
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
