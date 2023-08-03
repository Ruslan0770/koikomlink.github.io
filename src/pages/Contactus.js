import React from "react";
import contact from "../assets/img/contact.svg";
import "../assets/styles/contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contactus() {
  return (
    <>
      <div className="ContactUs">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="left">
                <h2>Contact Us</h2>
                <h6>
                  Feel free to contact us any time. We will get <br /> back to
                  you as soon as we can!
                </h6>
                <form>
                  <input
                    className="d-block"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="d-block"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="d-block"
                    type="text"
                    placeholder="Your Name"
                  />
                </form>
                <button>Send</button>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="right">
                <img src={contact} alt="" />
                <div className="box">
                  <div className="miniboxitems">
                    <h3>Info</h3>
                    <div className="itemsEdit">
                      <BsFillTelephoneFill className="icons" />
                      <span>14 Greenroad St.</span>
                    </div>
                    <div className="itemsEdit">
                      <BsFillTelephoneFill className="icons" />
                      <span>+24 56 89 146</span>
                    </div>
                    <div className="itemsEdit">
                      <BsFillTelephoneFill className="icons" />
                      <span>info@getintouch.we</span>
                    </div>
                    <div className="itemsEdit">
                      <BsFillTelephoneFill className="icons" />
                      <span>KOIKOM</span>
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
