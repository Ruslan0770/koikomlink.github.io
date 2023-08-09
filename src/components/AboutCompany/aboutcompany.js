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
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                  className="left"
                >
                  <h3>ABOUT OUR COMPANY</h3>
                  <h2>
                    Providing your business with a quality IT services is our
                    passion.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Duis eu et interdum
                    id. Malesuada amet rhoncus non sit. Lectus pellentesque
                    ornare felis in semper sit. Lorem ipsum dolor sit amet
                    consectetur. Duis eu et interdum id. Malesuada amet rhoncus
                    non sit. Lectus pellentesque ornare felis in semper sit.
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
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
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
