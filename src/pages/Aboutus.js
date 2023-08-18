import React from "react";
import "../assets/styles/aboutus.css";
import about from "../assets/img/aboutus.svg";
import about2 from "../assets/img/aboutus2.svg";
import about3 from "../assets/img/aboutus3.svg";
import about4 from "../assets/img/aboutus4.svg";

export default function Aboutus() {
  return (
    <>
      <section>
        <div className="About">
          <div className="container">
            <div className="row all">
              <div className="col-lg-8">
                <div className="left">
                  <h3>ABOUT OUR COMPANY</h3>
                  <h2>
                    Providing your business with a quality IT services is our
                    passion.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Duis eu et interdum
                    id. Malesuada  amet rhoncus non sit. Lectus
                    pellentesque ornare felis in semper sit. Lorem  ipsum
                    dolor sit amet consectetur. Duis eu et interdum id.
                    Malesuada amet  rhoncus non sit. Lectus pellentesque
                    ornare felis in semper sit. Lorem ipsum  dolor sit
                    amet consectetur. Duis eu et interdum id. Malesuada amet
                  rhoncus non sit. Lectus pellentesque ornare felis in
                    semper sit. Lorem ipsum  dolor sit amet consectetur.
                    Duis eu et interdum id. Malesuada amet  rhoncus non
                    sit. Lectus pellentesque ornare felis in semper sit.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="right">
                </div>
              </div>
              <div className="row all2">
              <div className="col-lg-6">
                <div className="left">
                  <div className="imgbox">
                    <img src={about2} alt="" />
                    <img src={about3} alt="" />
                    <img src={about4} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="downright">
                  <h3>ABOUT OUR TEAM</h3>
                  <h2>The Team</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Duis eu et interdum
                    id. Malesuada amet rhoncus non sit. Lectus
                    pellentesque ornare felis in semper sit. Lorem ipsum
                    dolor sit amet consectetur. Duis  eu et interdum id.
                    Malesuada amet rhoncus non sit. Lectus  pellentesque
                    ornare felis in semper sit. Lorem ipsum dolor sit 
                    amet consectetur. Duis eu et interdum id. Malesuada amet
                     rhoncus non sit. Lectus pellentesque ornare felis in
                    semper sit.  Lorem ipsum dolor sit amet consectetur.
                    Duis eu et interdum id.  Malesuada amet rhoncus non
                    sit. Lectus pellentesque ornare  felis in semper sit.
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
