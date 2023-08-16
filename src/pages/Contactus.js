import React from "react";
import contact from "../assets/img/contactlocation.svg";
import contact2 from "../assets/img/contactlocation2.svg";
import contact3 from "../assets/img/contactlocation3.svg";
import "../assets/styles/contact.css";

export default function Contactus() {
  return (
    <>
      <div className="ContactUs">
        <div className="container">
          <div className="row all">
            <div className="col-lg-7">
              <div className="left">
                <div className="box">
                  <div className="miniboxitems">
                    <h3>Info</h3>
                    <div className="itemsEdit">
                      <img src={contact} alt="" />
                    </div>
                    <div className="itemsEdit">
                      <img className="imgedit2" src={contact2} alt="" />
                    </div>
                    <div className="itemsEdit">
                      <img className="imgedit3" src={contact3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 rightall">
              <div className="right">
                <h2>Contact Us</h2>
                <h6>
                  Feel free to contact us any time. We will get back to you as
                  soon as we can!
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
                    placeholder="Your Email"
                  />
                  <input
                    className="d-block"
                    type="text"
                    placeholder="Typing your message here...."
                  />
                </form>
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
