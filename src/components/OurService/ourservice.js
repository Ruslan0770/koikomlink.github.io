import React from "react";
import "./ourservice.css";
import icons1 from "../../assets/img/serviceicons1.svg";
import icons2 from "../../assets/img/icons2.svg";
import icons3 from "../../assets/img/icons3.svg";
import icons4 from "../../assets/img/icons4.svg";
import icons5 from "../../assets/img/icons5.svg";
import icons6 from "../../assets/img/icons6.svg";
import { Link } from "react-router-dom";

export default function Ourservice() {
  return (
    <>
      <div className="OurService">
        <div className="container">
          <h4 className="text-center">WHAT WE PROVIDE</h4>
          <h2 className="text-center">Innovative IT Solutions for Progressive Business Growth</h2>
          <div className="row all">
            <div className="col-lg-4 col-md-6">
              <div className="boxall"></div>
              <div
                style={{ transition: "1.3s" }}
                // data-aos="flip-left"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
                className="box"
              >
                <img src={icons1} alt="" />
                <h5>IT Solution</h5>
                <p>
                  We offer custom IT strategies, including system integration
                  and data management, tailored to meet specific business needs.
                </p>
                <Link className="linkedit" to="./services">
                  <span>Read more</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="boxall"></div>
              <div
                style={{ transition: "1.3s" }}
                // data-aos="flip-left"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
                className="box"
              >
                <img src={icons2} alt="" />
                <h5>Web Development</h5>
                <p>
                  Our team provides creative web design and development
                  services, ensuring an engaging and brand-aligned online
                  presence.
                </p>
                <Link className="linkedit" to="./services">
                  <span>Read more</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="boxall"></div>
              <div
                style={{ transition: "1.3s" }}
                // data-aos="flip-left"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
                className="box"
              >
                <img src={icons3} alt="" />
                <h5>Networking Services</h5>
                <p>
                  We deliver dependable, expertly managed networking solutions
                  to support secure and high-speed business operations.
                </p>
                <Link className="linkedit" to="./services">
                  <span>Read more</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="boxall"></div>
              <div
                style={{ transition: "1.3s" }}
                // data-aos="flip-left"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
                className="box"
              >
                <img src={icons4} alt="" />
                <h5>SEO Optimization</h5>
                <p>
                  Our strategic SEO practices are designed to increase your
                  online visibility and attract more traffic.
                </p>
                <Link className="linkedit" to="./services">
                  <span>Read more</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="boxall"></div>
              <div
                style={{ transition: "1.3s" }}
                // data-aos="flip-left"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
                className="box"
              >
                <img src={icons5} alt="" />
                <h5>App Optimization</h5>
                <p>
                  We focus on comprehensive app improvement to enhance
                  performance, usability, and user engagement.
                </p>
                <Link className="linkedit" to="./services">
                  <span>Read more</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="boxall"></div>
              <div
                style={{ transition: "1.3s" }}
                // data-aos="flip-left"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
                className="box"
              >
                <img src={icons6} alt="" />
                <h5>Data Recovery</h5>
                <p>
                  Our specialized services are geared towards secure and
                  efficient retrieval of critical, lost business data.
                </p>
                <Link className="linkedit" to="./services">
                  <span>Read more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
