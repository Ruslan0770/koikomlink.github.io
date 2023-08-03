import React from "react";
import "./scompany.css";
import scompany from "../../assets/img/scompanyphoto.png";

export default function ServiceCompany() {
  return (
    <>
      <div
        data-aos="zoom-out-right"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="Service"
      >
        <div className="serviceAll">
          <div className="left">
            <div className="leftItems">
              <div className="h1edit">
                <h1>IT Solutions & Business Services Company</h1>
              </div>
              <div className="pedit">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Elementum convallis
                  interdum sem vestibulum fringilla venenatis est. Malesuada
                  mauris lacus sit suspendisse adipiscing vitae augue.{" "}
                </p>
              </div>
              <div className="buttonedit">
                <button>Our Service</button>
                <button>Contact Us</button>
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
