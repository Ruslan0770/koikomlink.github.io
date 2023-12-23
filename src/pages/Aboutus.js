import React from "react";
import "../assets/styles/aboutus.css";
import about from "../assets/img/aboutusminimg.png";
import about2 from "../assets/img/aboutusminimg2.png";
import about3 from "../assets/img/aboutusminimg3.png";

export default function Aboutus() {
  return (
    <>
      <section>
        <div className="About">
          <div className="container">
            <div className="row all">
              <div className="col-lg-8 col-md-7">
                <div className="left">
                  <h3>ABOUT OUR COMPANY</h3>
                  <h2>Pioneering Technology Solutions with a Personal Touch</h2>
                  <p>
                    Founded on a vision to bring innovative IT solutions to
                    businesses of all sizes, KOIKOM began as a small team of
                    tech enthusiasts with a big dream. Today, we've grown into a
                    leading provider of comprehensive IT services, yet we've
                    maintained our commitment to personalized care and bespoke
                    solutions. Our journey has been fueled by a passion for
                    technology and a dedication to our clients' success. As we
                    continue to evolve, our mission remains the same: to empower
                    businesses with cutting-edge IT solutions that drive growth
                    and efficiency, backed by our unwavering commitment to your
                    satisfaction.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="right"></div>
              </div>
              <div className="row all2">
                <div className="col-lg-6 col-md-6">
                  <div className="left">
                    <div className="imgbox">
                      <img src={about} alt="" />
                      <img src={about3} alt="" />
                      <img src={about2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="downright">
                    <h3>ABOUT OUR TEAM</h3>
                    <h2>Innovators and Experts in IT Solutions</h2>
                    <p>
                      Our team at KOIKOM is a unique blend of talent and
                      passion, dedicated to delivering exceptional IT services.
                      Each member, from our visionary leaders to our technical
                      experts, plays a crucial role in our success. <br /> ⦁ Founding
                      Visionaries: Driving our strategic direction, our founders
                      blend industry wisdom with innovative thinking. <br /> ⦁
                      Technical Team: Our developers and engineers are the
                      brains behind our cutting-edge solutions, constantly
                      innovating to meet client needs. <br /> ⦁ Project Managers:
                      Ensuring every project is a success, our managers are
                      experts in seamless execution and delivery. <br /> ⦁ Support
                      Staff: Our dedicated support team is always ready to
                      assist, ensuring a smooth and satisfying client
                      experience. Together, we're committed to excellence,
                      working tirelessly to provide the best IT solutions for
                      your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="Stats">
          <div className="container">
            <div className="row all">
              <div className="col-lg-3 col-md-3">
                <div className="box">
                  <h5>27+</h5>
                  <h6>Years Helping Business</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="box">
                  <h5>500+</h5>
                  <h6>Employees</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="box">
                  <h5>30M</h5>
                  <h6>Completed Projects</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="box">
                  <h5>90K+</h5>
                  <h6>5 Star Rating</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
